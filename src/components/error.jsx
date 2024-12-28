import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err=useRouteError();
  return (
    <>
    <div>Oops!!!</div>
    <div>Something went wrong</div>
    <h3>{err?.status}:{err.statusText}</h3>
    </>
  )
}

export default Error