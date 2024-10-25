import * as React from "react"
import Layout from "../components/layout"

export default function IndexPage ()  {
  return (
    <Layout>
      <h1>Página 3</h1>
      <div>
        <p>Esse é o primeiro parágrafo</p>
        <p>Esse é o segundo parágrafo</p>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
