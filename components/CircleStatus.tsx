import React from 'react'

export default function CircleStatus({ isActive }: { isActive: any }) {
    const circleClass = isActive ? 'bg-green-400' : 'bg-red-400';
  return (
    <div className="flex items-center justify-start">
      <div className={`w-6 h-6 rounded-full ${circleClass}`}></div>
    </div>
  )
}
