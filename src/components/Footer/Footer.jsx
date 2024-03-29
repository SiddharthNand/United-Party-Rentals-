import './Footer.css';




export default function Footer() {
  return (
    <footer>
      <div className='socialbut'>
        <ul class="wrapper">
          <li class="icon facebook">
            <a href="https://www.yelp.com/biz/united-party-rentals-sacramento-3" target="_blank" rel="noreferrer">
              <span class="tooltip">Yelp</span>
              <span><img src="https://i.imgur.com/KfnvNoc.png"
                alt='bbb'
                height="40px"
              />
              </span>
            </a>
          </li>
          <li class="icon twitter">
            <a href="https://goo.gl/maps/Z6bD4CAEzf29TQMt8" target="_blank" rel="noreferrer">
              <span class="tooltip">Google</span>
              <span><img src="https://i.imgur.com/m8cpY8h.png"
                alt='bbb'
                height="40px"
              />
              </span>
            </a>
          </li>
          <li class="icon instagram">
            <a href="https://www.bbb.org/us/ca/sacramento/profile/party-supplies/united-party-rentals-1156-37000504" target="_blank" rel="noreferrer">
              <span class="tooltip">BBB</span>
              <span><img src="https://i.imgur.com/JGf1ptV.png"
                alt='bbb'
                height="45px"
              />
              </span>
            </a>
          </li>
          <li class="icon insta">
            <a href="https://www.instagram.com/upr.sac/?hl=en" target="_blank" rel="noreferrer">
              <span class="tooltip">Instagram</span>
              <span><img src="https://i.imgur.com/LfIQDWg.png"
                alt='insta'
                height="30px"
              />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright © 2022 United Party Rentals
        <br></br>
      </p>
    </footer>

  )
}