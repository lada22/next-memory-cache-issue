import React from 'react'
import Link from 'next/link'
import memoryCache from 'memory-cache/memory-cache'

function PutPackagePage(props) {
  return (<p>This page puts x=3 in the cache. Referenced by local-package-reference.</p>);
}

export async function getServerSideProps(ctx) {
  memoryCache.put('x', '3');

  return { props: {} }
}

export default PutPackagePage
