'use client'

export default function ErrorPage({error, reset}) {
    console.error(error)

    return (
        <div>
            <p>Error: Please try again</p>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}