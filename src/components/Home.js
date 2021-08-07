import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useState } from 'react'
import AceEditor from 'react-ace'

// import mode-<language> , this imports the style and colors for the selected language.
import 'ace-builds/src-noconflict/mode-javascript'
// there are many themes to import, I liked monokai.
import 'ace-builds/src-noconflict/theme-monokai'
// this is an optional import just improved the interaction.
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
const Home = () => {
    const [code, setCode] = useState(`function hello() {
        console.log("Hello World!");
      }`)
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Debug Rank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#link">Practice</Nav.Link>
                            <Nav.Link href="#link">Certification</Nav.Link>
                            <Nav.Link href="#link">Compete</Nav.Link>
                            <Nav.Link href="#link">Jobs</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <AceEditor
                style={{
                    height: '100vh',
                    width: '100%',
                }}
                placeholder='Start Coding'
                mode='javascript'
                theme='monokai'
                name='basic-code-editor'
                onChange={currentCode => setCode(currentCode)}
                fontSize={18}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />

        </>
    )
}

export default Home
