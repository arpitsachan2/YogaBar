import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Username: ${username}, Password: ${password}`)
  }

  return (
    <div>
      <Nav />

      <div style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #E33675, #932951)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      }}>
        <motion.div
          initial={{ y: -3, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '40vw',
            maxWidth: '80vw',
            padding: '2.5vw',
            borderRadius: '1.5vw',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(1vw)',
            boxShadow: '0 1vw 2vw rgba(0,0,0,0.25)',
            color: '#fff'
          }}
        >
          <h2 id='paytone' style={{
            textAlign: 'center',
            marginBottom: '2vw',
            fontWeight: 300,
            fontSize: '3vw'
          }}>
            WELCOME
          </h2>

          <motion.input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            style={inputStyle}
            required
          />

          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            style={inputStyle}
            required
          />

          <motion.button
            type="submit"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={buttonStyle}
          >
            Login
          </motion.button>

          <p style={{
            textAlign: 'center',
            marginTop: '1.2vw',
            fontSize: '1.2vw'
          }}>
            Don’t have an account? <a href="#" style={{ color: '#FFDDEE' }}>Sign Up</a>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.8vw 1vw',
  marginBottom: '1.2vw',
  border: 'none',
  borderRadius: '1vw',
  background: 'rgba(255, 255, 255, 0.2)',
  color: '#fff',
  fontSize: '1.2vw',
  outline: 'none',
  backdropFilter: 'blur(0.5vw)',
  boxShadow: 'inset 0 0.1vw 0.2vw rgba(0,0,0,0.1)'
}

const buttonStyle = {
  width: '100%',
  padding: '1vw',
  borderRadius: '1vw',
  border: 'none',
  background: '#E33675',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.4vw',
  cursor: 'pointer',
  boxShadow: '0 0.3vw 0.8vw rgba(0,0,0,0.3)'
}

export default Login
