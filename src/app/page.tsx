import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Camera, 
  Users, 
  FileText, 
  Globe, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Building2,
  HardHat,
  Wrench,
  BarChart3,
  Lock,
  Cloud
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
              <Building2 className="w-5 h-5" />
              Steel Tech Industries
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Future of
            <span className="text-orange-500 block mt-2">Construction Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering ironworkers and construction professionals with cutting-edge digital solutions. 
            Home of <span className="font-semibold text-orange-400">Iron Task 726</span> - the industry&apos;s most trusted documentation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Explore Iron Task 726
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Trusted by 10,000+ Workers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>500+ Construction Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>2M+ Projects Documented</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Iron Task 726 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Wrench className="w-5 h-5" />
              Flagship Product
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Iron Task 726
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional construction documentation system built by ironworkers, for ironworkers. 
              Document projects, ensure safety compliance, and track progress with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Camera className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Smart Documentation</CardTitle>
                <CardDescription>
                  Capture, upload, and organize photos with AI-powered tagging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dual camera support with picture-in-picture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Photo annotation and markup tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Batch upload from any device</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Globe className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Multi-Language Teams</CardTitle>
                <CardDescription>
                  Real-time translation breaks down language barriers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Instant message translation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Team chat with @mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Project-specific channels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <FileText className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>AI-Powered Reports</CardTitle>
                <CardDescription>
                  Generate comprehensive documentation with one click
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Progress recaps with insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated daily logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Share via email, SMS, or link</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Shield className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Safety First</CardTitle>
                <CardDescription>
                  Enterprise-grade security for construction sites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Secure document sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Complete audit trail</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Smartphone className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  Built for the field, works anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Works offline, syncs when connected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimized for gloved hands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Live project feeds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Users className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Keep everyone on the same page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Project-specific permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Remote monitoring capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Learn More About Iron Task 726
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Steel Tech */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <Building2 className="w-5 h-5" />
                About Steel Tech
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Forged in Experience, Built for Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Steel Tech was founded by industry veterans who understand the unique challenges of modern construction. 
                We&apos;ve spent decades in the field, working alongside ironworkers, project managers, and safety officers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is simple: create technology that makes construction safer, more efficient, and more connected. 
                Iron Task 726 is the result of listening to thousands of workers and building exactly what they need.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">15+</h3>
                  <p className="text-gray-600">Years of Industry Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">98%</h3>
                  <p className="text-gray-600">Customer Satisfaction Rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">24/7</h3>
                  <p className="text-gray-600">Support & Reliability</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
                  <p className="text-gray-600">Enterprise Clients</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <HardHat className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Built By The Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team includes former ironworkers, safety managers, and project coordinators who know what works in the field.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <Lock className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Security You Can Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enterprise-grade security with SOC 2 compliance, ensuring your project data is always protected.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <Cloud className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle>Always Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    99.9% uptime guarantee with cloud infrastructure that scales with your business needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <BarChart3 className="w-5 h-5" />
              Technology
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern, scalable technologies trusted by Fortune 500 companies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p className="text-gray-600 text-sm">Next.js 14, TypeScript, React, Tailwind CSS</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p className="text-gray-600 text-sm">Node.js, Fastify, PostgreSQL, Redis</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Docker, WebSocket, JWT Auth, MinIO Storage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Construction Documentation?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of construction professionals who trust Iron Task 726 every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
          <p className="text-orange-100 mt-6 text-sm">
            No credit card required • 30-day free trial • Full feature access
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Steel Tech</h3>
              <p className="text-sm">
                Building the future of construction technology, one project at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Iron Task 726</Link></li>
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Partners</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
                <li><Link href="#" className="hover:text-white">API</Link></li>
                <li><Link href="#" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Steel Tech Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}