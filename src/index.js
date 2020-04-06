import { Komponent , render} from 'kofujs'


const styles = {
  
  mainPageHeading: {
    margin: '-1rem', 
    padding:'0',
    position: 'absolute',
    backgroundColor: '#c4c4f7', 
    width: '100vw',
    height: "102vh", 
    background: `url('https://source.unsplash.com/user/nasa/daily') no-repeat center center/cover`, 
    overflowX: 'hidden',
    overflowY: 'hidden',
    zIndex: '-1'
  }, 
  container: {
    color: '#ffffff',
    fontSize: '5rem',
    lineHeight: '1.3',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center', 
    alignItems: 'center', 
    zIndex: '50'
  },
  btnHolder:{
    margin: '3rem',
    width: '50%',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center', 
    alignItems: 'center', 

  },
  mainBtn:{
    backgroundColor: 'transparent', 
    border: `1px solid #ffffff`,
    padding:'0 1.8rem',
    height: '3rem', 
    display: 'flex', 
    flexDirection: 'colunm',
    justifyContent: 'center',
    alignContent: 'center', 
    alignItems: 'center', 
  },
  anchorS:{
    color: '#ffffff',
    letterSpacing: '0.8rem',
    textDecoration: 'none',
    fontSize: '1.2rem', 
    textTransform: 'uppercase',
  },

  h1Font: {
    fontFamily: `'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'`, 
    letterSpacing: '0.5rem', 
    display: 'flex', 
    alignContent: 'center', 
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'black', 
    opacity: '0.5',
    position: 'absolute',
    width:'100%',
    height: '100%',
    zIndex: '49'
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)

    this.classes = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }

  present () {
    return (
      <header className={`${this.classes.mainPageHeading}`}>
        <div className={`${this.classes.overlay}`}></div>
        <div className={`${this.classes.container}`}>
          <div className={`${this.classes.btnHolder}`}>
            <div className={`${this.classes.mainBtn}`}>
              <a className={`${this.classes.anchorS}`} href="https://www.npmjs.com/package/create-new-app">NPM</a>
            </div>
            <div className={`${this.classes.mainBtn}`}>
              <a className={`${this.classes.anchorS}`} href="https://github.com/arthurbernierjr/kofujs">GiHub</a>
            </div>
          </div>
          <div>
            <h1 className={`${this.classes.h1Font}`}>KoFuJS</h1>
         </div>
        </div>
      </header>
    )
  }
}

render(<Example />, document.getElementById('app'))
