import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata : Metadata = {
    title : "this is individual page",
    description : "some random description"
}


export default function RootLayout ({
    children,
}: {
    children : React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

