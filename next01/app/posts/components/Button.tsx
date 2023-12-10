import Link from 'next/link'
import React from 'react'

type Props = {
  href : string,
  linkname : string
}

const Button = (props : Props) => {
  return (
    <button>
        <Link href={props.href}>
            {props.linkname}
        </Link>
    </button>
  )
}

export default Button