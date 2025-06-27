'use client'

import { useState, useEffect } from 'react'

interface CaptchaProps {
  onVerify: (verified: boolean) => void
  type?: 'math' | 'image' | 'text'
}

export default function Captcha({ onVerify, type = 'math' }: CaptchaProps) {
  const [captchaValue, setCaptchaValue] = useState('')
  const [userInput, setUserInput] = useState('')
  const [verified, setVerified] = useState(false)
  const [challenge, setChallenge] = useState({ question: '', answer: '' })

  const generateMathChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ['+', '-', '*']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    
    let answer
    let question
    
    switch (operation) {
      case '+':
        answer = num1 + num2
        question = `${num1} + ${num2}`
        break
      case '-':
        answer = Math.max(num1, num2) - Math.min(num1, num2)
        question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`
        break
      case '*':
        answer = num1 * num2
        question = `${num1} × ${num2}`
        break
      default:
        answer = num1 + num2
        question = `${num1} + ${num2}`
    }
    
    return { question, answer: answer.toString() }
  }

  const generateTextChallenge = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return { question: result, answer: result }
  }

  const regenerateChallenge = () => {
    setVerified(false)
    setUserInput('')
    
    if (type === 'math') {
      setChallenge(generateMathChallenge())
    } else if (type === 'text') {
      setChallenge(generateTextChallenge())
    }
  }

  useEffect(() => {
    regenerateChallenge()
  }, [type])

  const handleSubmit = () => {
    const isCorrect = userInput.trim().toLowerCase() === challenge.answer.toLowerCase()
    setVerified(isCorrect)
    onVerify(isCorrect)
    
    if (!isCorrect) {
      regenerateChallenge()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  if (type === 'image') {
    return (
      <div className="border border-gray-300 rounded p-4 bg-gray-50" data-testid="image-captcha">
        <div className="mb-3">
          <p className="text-sm font-medium mb-2">Select all images with traffic lights:</p>
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300 flex items-center justify-center text-xs"
                onClick={() => {
                  if (i === 1 || i === 4 || i === 7) {
                    setVerified(true)
                    onVerify(true)
                  }
                }}
              >
                {i === 1 || i === 4 || i === 7 ? '🚦' : '🏢'}
              </div>
            ))}
          </div>
        </div>
        {verified && (
          <div className="text-green-600 text-sm flex items-center">
            ✓ Verified successfully
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="border border-gray-300 rounded p-4 bg-gray-50" data-testid="captcha-container">
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-white border border-gray-400 rounded px-3 py-2 font-mono text-lg select-none">
          {type === 'math' ? (
            <span>{challenge.question} = ?</span>
          ) : (
            <span className="tracking-wider" style={{ fontFamily: 'courier, monospace' }}>
              {challenge.question}
            </span>
          )}
        </div>
        <button
          onClick={regenerateChallenge}
          className="text-blue-600 hover:text-blue-800 text-sm"
          title="Refresh challenge"
          data-testid="refresh-captcha"
        >
          🔄
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={type === 'math' ? 'Enter the answer' : 'Enter the text shown above'}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="captcha-input"
          disabled={verified}
        />
        <button
          onClick={handleSubmit}
          disabled={!userInput.trim() || verified}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="verify-captcha"
        >
          Verify
        </button>
      </div>
      
      {verified && (
        <div className="mt-2 text-green-600 text-sm flex items-center">
          ✓ Verification successful
        </div>
      )}
      
      {userInput && !verified && challenge.answer && userInput.trim() !== '' && (
        <div className="mt-2 text-red-600 text-sm">
          ✗ Incorrect, please try again
        </div>
      )}
    </div>
  )
}