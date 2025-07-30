import type { Route } from './+types/home'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import {
  CheckCircle,
  TrendingUp,
  Users,
  Leaf,
  Search,
  MessageSquare,
  BarChart3,
  Globe,
  Mail,
  MapPin,
  Phone,
  Link,
  SquareArrowOutUpRight,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My Pind Project - Empowering Punjab\u2019s Villages' },
    {
      name: 'description',
      content:
        'Help transform your home village through sustainable, data-driven development. A Saving Punjab Initiative.',
    },
  ]
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const videoRefMobile = useRef<HTMLVideoElement>(null)
  const videoRefDesktop = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // 80% of viewport height
      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Video autoplay on scroll
  useEffect(() => {
    const videos = [videoRefMobile.current, videoRefDesktop.current].filter(
      Boolean
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed, probably due to browser policies
              console.log('Autoplay prevented by browser policy')
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px 0px -10% 0px', // Slight offset from bottom
      }
    )

    videos.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videos.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 border-b border-border shadow-sm'
            : 'bg-white/0 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/saving_punjab_logo.png"
                alt="Saving Punjab Logo"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
            <div>
              <h1
                className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                My Pind Project
              </h1>
              <p
                className={`text-xs md:text-sm sm:block transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}
              >
                A Saving Punjab Initiative
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="secondary"
              size="sm"
              className={`text-xs md:text-sm transition-all duration-300 ${
                isScrolled ? 'border-border hover:bg-accent' : ''
              }`}
            >
              <a
                href="mailto:info@savingpunjab.org"
                className="flex items-center"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">info@savingpunjab.org</span>
                <span className="sm:hidden">Contact</span>
              </a>
            </Button>
            <select
              className={`hidden lg:block px-3 py-2 border rounded-md text-sm transition-all duration-300 ${
                isScrolled
                  ? 'border-border bg-background text-foreground'
                  : 'border-white/30 bg-white/10 text-white backdrop-blur-sm'
              }`}
            >
              <option value="en">English</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center text-white pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Punjab's Villages,
              <br />
              <span className="text-primary">One Pind at a Time</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Help transform your home village through sustainable, data-driven
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a
                  href="https://www.mypindproject.com/product/my-pind-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refer Your Pind
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why My Pind Project Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Why The My Pind Project?
              </h2>
              <p className="text-xl md:text-2xl font-light text-foreground mb-6 leading-relaxed">
                The My Pind Project is dedicated to transforming and
                revitalizing the villages of Punjab.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to{' '}
                <span className="font-semibold text-foreground">
                  empower communities
                </span>{' '}
                by identifying their unique challenges and strengths through{' '}
                <span className="font-semibold text-foreground">
                  rigorous, data-driven research
                </span>
                . We work hand-in-hand with{' '}
                <span className="text-primary font-semibold">
                  local leaders and the Punjabi diaspora
                </span>
                , helping each village flourish sustainably for generations to
                come.
              </p>
            </div>
            <div className="relative">
              <img
                // src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                src="/farmer-3.jpg"
                alt="Punjab village landscape"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Feature Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">
                  Data-Driven Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We use comprehensive research and analysis to tailor solutions
                  that fit each village's specific needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">
                  Community Empowerment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We partner with local leaders to ensure solutions are
                  practical, culturally respectful, and community-led.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-primary">
                  Sustainable Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our approach aligns with the United Nations Sustainable
                  Development Goals, focusing on long-lasting, positive change.
                </CardDescription>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Project Explanation Video Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border/50">
              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                    See Our Impact in Action
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Watch how we're transforming Punjab's villages through
                    data-driven development and community collaboration.
                  </p>
                </div>

                <div className="relative aspect-[9/16] max-w-sm mx-auto">
                  <video
                    ref={videoRefMobile}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    controls
                    preload="metadata"
                    poster="/video-thumbnail.png"
                    playsInline
                  >
                    <source src="/my-pind-project-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Learn about our comprehensive approach to village
                    development
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                {/* Video Column */}
                <div className="relative aspect-[9/16] max-w-sm">
                  <video
                    ref={videoRefDesktop}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                    controls
                    preload="metadata"
                    poster="/video-thumbnail.png"
                    playsInline
                  >
                    <source src="/my-pind-project-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Content Column */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl xl:text-4xl font-semibold mb-4 text-foreground">
                      See Our Impact in Action
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Watch how we're transforming Punjab's villages through
                      data-driven development and community collaboration.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Real village stories
                        </span>{' '}
                        from our field research teams
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Data-driven insights
                        </span>{' '}
                        that drive sustainable change
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Community partnerships
                        </span>{' '}
                        with local leaders
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Learn about our comprehensive approach to village
                      development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Make a Difference Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How You Can Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your connection to your home village can spark meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="step-card">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-700">
                  Submit Your Referral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Share your village's information with us, and we'll connect
                  with local contacts to start the project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="step-card">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-700">
                  Field Research & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Our expert team visits your village to gather vital data and
                  insights across key areas like education, health, agriculture,
                  and infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="step-card">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center text-purple-700">
                  Get Actionable Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We generate a detailed report with recommendations to ensure
                  sustainable village development, involving both the local
                  community and the diaspora in implementing solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-left">
              Take the first step in reconnecting with and supporting your home
              village's sustainable growth.
            </h2>

            <div className="space-y-6 mb-12 ">
              <div className="flex items-center justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-lg text-white">Passion for Punjab</span>
              </div>

              <div className="flex items-start justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">
                    Contact to leadership in your Pind
                  </div>
                  <div className="text-white/80">
                    This could be the Sarpanch, a member of the Panch, Gurdwara
                    Granthi or Committee member
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">
                    Able to invest in your Pind
                  </div>
                  <div className="text-white/80">
                    The cost to fund a comprehensive study and development plan
                    for each village is usually £1,000. Saving Punjab has
                    subsidised this so that you can{' '}
                    <a
                      href="https://www.mypindproject.com/product/my-pind-project/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80"
                    >
                      refer your Pind
                    </a>{' '}
                    for a minimum contribution of £350.
                  </div>
                  <div className="text-white/80 mt-2">
                    If you're able, we encourage you to contribute more than the
                    subsidized amount to further support this initiative
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 text-lg"
                asChild
              >
                <a
                  href="https://www.mypindproject.com/product/my-pind-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refer Your Pind
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/saving_punjab_logo.png"
                  alt="Saving Punjab Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">My Pind Project</h3>
                <p className="text-sm text-muted-foreground">
                  A Saving Punjab Initiative
                </p>
              </div>
            </div>

            <div className="flex-col md:flex-row gap-4 flex items-center space-x-6">
              <a
                href="https://savingpunjab.org"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <SquareArrowOutUpRight className="w-4 h-4" />
                <span>Saving Punjab Website</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@savingpunjab.org</span>
              </div>

              <select className="px-3 py-2 border border-border rounded-md text-sm bg-background">
                <option value="en">English</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
              </select>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Saving Punjab © All rights Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
