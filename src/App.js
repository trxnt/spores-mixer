import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Figure,
  InputGroup,
} from "react-bootstrap/";
import { CrossFader } from "./src/lib/components/CrossFader.js";
import { useState, useCallback } from "react";
import { useSporeData } from "./src/lib/hooks/useSporeData.js";
import "./App.css";
import { SporeEmbed } from "./src/lib/components/SporeEmbed.js";
import styles from "./src/styles.module.css";

// list of songs
let songs = [
  "https://ipfs.io/ipfs/QmPA4wEPTQjoFsvmSKufzej1RbzuqbJcLrUjQJJfwoQEhh", // Pauline Her - Disapper
  "https://zora-prod.mypinata.cloud/ipfs/bafybeigzaljfx4q2dasfgsz3z6hvyqm332mdkqlptxk6cta3qfiswuq6ry", // Alex Siegel - Lonely Days
  "https://catalog.mypinata.cloud/ipfs/QmWWwDepZfDKqypi5DXzYzGk7tVCdpDaTPLFSysA3PBRrm", // Dutchyyy
];

// spore skin art
let skin =
  "https://ipfs.pixura.io/ipfs/QmZ12WRSU5GS9dMuow2FAeerkaixhykZo6UXWM6G4tKfZp/road-trip-jpg.jpg";

// list of juice samples
let juiceSamples = [
  "https://zequencer.io/ipfs/QmYh8ryEJ5X3RD4wwkuRpyhgXwiQdWsqmfwgDhUtE4qonZ",
  "https://zequencer.io/ipfs/Qmc43UqNSmcePMaLNP1PCK2rHRmYDJkvMPw2j5xxhWSAWi",
  "https://zequencer.io/ipfs/QmPrtDNY42aiJGLAMp2u2C9CYfFHADv6MA8ETQ29E8LYbV",
];

// set songs
function App() {
  let [main, setMain] = useState(songs[0]);
  let [alternate, setAlternate] = useState(songs[1]);
  let [crossFadeUI, setCrossFadeUI] = useState(0);

  let {
    isStuttering,
    stutterRate,
    currentStep,
    bpm,
    playing,
    currentBeat,
    progress,
    crossFade,
  } = useSporeData();

  // app
  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Spores"
              src="https://www.spores.vision/spores-logo-white.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SPORES STUDIO
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            {/* Main Song */}
            <Container className="song1">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Disappear - Pauline Herr"
                  aria-label="Main song"
                  aria-describedby="basic-addon2"
                />
                <Button variant="btn btn-outline-light" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
              <Figure>
                <Figure.Image
                  width={420}
                  height={500}
                  alt="spore"
                  src="./main-song.png"
                />
                <Figure.Caption></Figure.Caption>
              </Figure>
              <Button variant="link-dark">ZORA</Button>
            </Container>
          </Col>
          <Col>
            {/* Controller */}
            <Container className="controllers">
              <SporeEmbed
                main={main} // url to main track (can be switched w/o interrupting)
                alternate={alternate} // url to alternate track (can be switched w/o interrupting)
                juiceSamples={juiceSamples} // list of URLs to samples
                backgroundColor="#282c34" // background color of Spore itselft
                color="white" // color of waveform below
                skin={skin} // URL to image to be morphed on skin
                crossFade={crossFadeUI} // set this to override the cross fade between main / alternate (w/o using the Spore)
              />
              <br></br>
              <Form.Select aria-label="Default select example">
                <option>Juice 1</option>
                <option value="1">Rock drums</option>
                <option value="2">Electric guitar</option>
                <option value="3">Jazz trumpet</option>
              </Form.Select>
              <br></br>
              <Form.Select aria-label="Default select example">
                <option>Juice 2</option>
                <option value="1">Accoustic guitar</option>
                <option value="2">808's</option>
                <option value="3">Snare drums</option>
              </Form.Select>
              <br></br>
              <Form.Select aria-label="Default select example">
                <option>Juice 3</option>
                <option value="1">Trap beat</option>
                <option value="2">Alternative drums</option>
                <option value="3">Indie violin</option>
              </Form.Select>
            </Container>
          </Col>
          <Col>
            {/* Alternate Song */}
            <Container className="song2">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Shine - Charm Taylor ft. MoRuf"
                  aria-label="Alternate song"
                  aria-describedby="basic-addon2"
                />
                <Button variant="btn btn-outline-light" id="button-addon2">
                  Seach
                </Button>
              </InputGroup>
              <Figure>
                <Figure.Image
                  width={420}
                  height={500}
                  alt="spore"
                  src="./alt-song.png"
                />
                <Figure.Caption></Figure.Caption>
              </Figure>

              <Button variant="link-dark">ZORA</Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
