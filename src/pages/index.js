import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import {CardServices} from "../components/card-services"
import {Button} from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Button title="Ingresar" className="bg-red-500 text-white rounded"></Button>
  </Layout>
)


export default IndexPage
