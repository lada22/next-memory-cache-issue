import React from 'react'
import Link from 'next/link'
import memoryCache from '../memory-cache/memory-cache'

function PutDirectPage(props) {
  return (<p>This page puts x=3 in the cache. Referenced by file-reference.</p>);
}

export async function getServerSideProps(ctx) {
  return { props: {} }
}

export default PutDirectPage