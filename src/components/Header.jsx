import logo from "../assets/hello-kitty-logo.png"

export default function Header() {
    return <header id="header">
        <img src={logo} alt="Header logo" />
        <h1>Investment Calculator</h1>
    </header>
}