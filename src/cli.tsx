#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'

import './utils/help'
import App from './app'
import { isHasParams } from './utils/index'

if (!isHasParams())
  render(<App />)
