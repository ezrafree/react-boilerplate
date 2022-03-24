import image from '../assets/hello-world.jpg'

export const HelloWorld = () => {
  return (
    <div>
      <img style={{ width: '500px', height: '300px' }} src={image} alt="placeholder" />
      <h1 className="app">Hello, world</h1>
    </div>
  )
}
