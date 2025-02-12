// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' }
]
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Tools & Equipment', url: '/' },
      { name: 'Construction Services', url: '/services' }
    ]
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/' },
      { name: 'Blog', url: '/' },
      { name: 'Careers', url: '/' },
      { name: 'Customers', url: '/' }
    ]
  }
]

const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61572103844556',
  x: 'https://twitter.com/',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/'
}

export default {
  navBarLinks,
  footerLinks,
  socialLinks
}
