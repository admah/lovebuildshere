import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import AdamProfilePic from './adam-profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={AdamProfilePic}
          alt={`Adam Murray`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Adam Murray</strong>, a dad of 5, husband of 1,
          pastor, and software engineer.{' '}
          <a href="https://twitter.com/admah">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
