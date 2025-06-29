'use client'

import Lottie from 'lottie-react';
import botHello from '../../../public/animations/bot-hello.json';
import botWorking from '../../../public/animations/bot-working.json';

export function BotHelloAnimation() {
  return <Lottie animationData={botHello} loop={true} style={{ height: 175, width: 175 }} />;
}

export function BotWorkingAnimation({ height = 40, width = 40 }: { height?: number; width?: number }) {
  return <Lottie animationData={botWorking} loop={true} style={{ height, width, minHeight: height, minWidth: width }} />;
}
