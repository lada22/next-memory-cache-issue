import React from 'react'
import Link from 'next/link'
import memoryCache from 'memory-cache/memory-cache'

function ReadPackagePage(props) {
  return (<p>This page reads the x value from cache. Referenced by local-package-reference. It should be 3: {props.x}</p>);
}

export async function getServerSideProps(ctx) {
  let x = memoryCache.get('x') || null;
  console.log(x);

  return {
    props: {
      x
    }
  }
}

export default ReadPackagePage