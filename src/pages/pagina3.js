import * as React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

export default function Pagina3() {
  const data = useStaticQuery(graphql`
    query{
      allRestApiUsers{
        edges{
          node{
            id
            name
            phone
            username
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Dados Internos</h1>
      <div>
        <p>Usuários</p>
        <table width="100%">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
          {
            data.allRestApiUsers.edges.map(item => {
              return(
                <tr>
                  <td>{item.node.id}</td>
                  <td>{item.node.name}</td>
                  <td>{item.node.phone}</td>
                  <td>{item.node.username}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Dados Internos</title>
