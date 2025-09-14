import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Zap, Share2, Target, Sparkles } from "lucide-react"

export default function PathDesignLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-black text-card-foreground brutalist-border bg-card px-4 py-2 brutalist-shadow">
            PathDesign
          </div>
          <div className="text-xl font-black text-card-foreground bg-card px-4 py-2 brutalist-border brutalist-shadow">
            MENU
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
        {/* Floating Images - Collage Style */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-40 bg-card brutalist-border brutalist-shadow float-animation">
            <img
              src="/person-running-in-urban-setting.jpg"
              alt="Runner in city"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute top-40 right-20 w-40 h-32 bg-card brutalist-border brutalist-shadow float-animation"
            style={{ animationDelay: "1s" }}
          >
            <img
              src="/heart-shaped-running-route-on-map.jpg"
              alt="Heart route"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-40 left-20 w-36 h-36 bg-card brutalist-border brutalist-shadow float-animation"
            style={{ animationDelay: "2s" }}
          >
            <img
              src="/smartphone-showing-running-app-interface.jpg"
              alt="App interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute top-60 right-40 w-28 h-36 bg-card brutalist-border brutalist-shadow float-animation"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src="/couple-walking-together-on-path.jpg"
              alt="Couple walking"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-20 right-10 w-32 h-24 bg-card brutalist-border brutalist-shadow float-animation"
            style={{ animationDelay: "1.5s" }}
          >
            <img
              src="/social-media-post-with-running-achievement.jpg"
              alt="Social sharing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-balance leading-tight">
            운동, 이제
            <br />
            <span className="text-primary">작품</span>이 된다.
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-12 text-balance max-w-2xl mx-auto">
            원하는 거리만 입력하면,
            <br />
            당신만의 경로 디자인이 완성됩니다.
          </p>
          <Button
            size="lg"
            className="text-xl px-12 py-6 font-black brutalist-border brutalist-shadow pulse-glow bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            🚀 지금 바로 경로 만들기
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 brutalist-border brutalist-shadow bg-card">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-card-foreground text-center">
              똑같은 산책길,
              <br />
              지루하지 않으셨나요?
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              러닝·산책은 하고 싶지만, 새로운 코스를 찾는 건 늘 귀찮죠.
              <br />
              게다가 거리가 딱 맞아떨어지지 않으면 시작조차 망설이게 되고요.
            </p>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-balance">
            PathDesign은 거리를 입력하는 순간,
            <br />
            <span className="text-primary">AI가 당신만의 작품 같은 경로</span>를<br />
            만들어 드립니다.
          </h2>
          <p className="text-xl mb-12 text-balance max-w-2xl mx-auto">
            걷고 뛰는 시간이 단순한 운동을 넘어 <strong>콘텐츠</strong>로 재탄생합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">핵심 기능</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <Target className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">🎯 목표 거리 설정</h3>
              <p className="text-muted-foreground">내가 원하는 km만 입력하면 끝!</p>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <Sparkles className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">✨ 자동 경로 디자인</h3>
              <p className="text-muted-foreground">AI가 알아서 거리 맞춤 패턴 생성</p>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <Heart className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">🎨 다양한 패턴 옵션</h3>
              <p className="text-muted-foreground">직선·곡선·원형·하트·이니셜까지</p>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <MapPin className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">📍 지도 실시간 연동</h3>
              <p className="text-muted-foreground">Google Maps / Naver Map 기반</p>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <Share2 className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">📲 공유 & 저장 기능</h3>
              <p className="text-muted-foreground">SNS 인증샷, 챌린지, PDF 저장</p>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card hover:scale-105 transition-transform">
              <Zap className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-2xl font-black mb-4 text-card-foreground">⚡ 즉시 시작</h3>
              <p className="text-muted-foreground">복잡한 설정 없이 바로 시작</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">요금제</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 brutalist-border brutalist-shadow bg-card">
              <Badge className="mb-4 bg-muted text-muted-foreground">프리 티어</Badge>
              <h3 className="text-3xl font-black mb-2 text-card-foreground">무료</h3>
              <p className="text-muted-foreground mb-6">기본 패턴 + 월 3회</p>
              <Button variant="outline" className="w-full brutalist-border bg-transparent">
                시작하기
              </Button>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-card">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">스탠다드</Badge>
              <h3 className="text-3xl font-black mb-2 text-card-foreground">
                ₩3,900<span className="text-lg">/월</span>
              </h3>
              <p className="text-muted-foreground mb-6">패턴 무제한 + 저장/공유</p>
              <Button variant="outline" className="w-full brutalist-border bg-transparent">
                선택하기
              </Button>
            </Card>

            <Card className="p-8 brutalist-border brutalist-shadow bg-secondary text-secondary-foreground pulse-glow">
              <Badge className="mb-4 bg-card text-card-foreground">프리미엄</Badge>
              <h3 className="text-3xl font-black mb-2">
                ₩7,900<span className="text-lg">/월</span>
              </h3>
              <p className="mb-6 opacity-90">고급 패턴 + 광고 제거 + 커뮤니티</p>
              <Button className="w-full bg-card text-card-foreground brutalist-border hover:bg-card/90">추천!</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-balance">
            길을 걷는 게 아니라,
            <br />
            <span className="text-foreground">길을 만든다.</span>
          </h2>
          <Button
            size="lg"
            className="text-xl px-12 py-6 font-black brutalist-border brutalist-shadow pulse-glow bg-secondary text-secondary-foreground hover:bg-secondary/90 mb-8"
          >
            🚀 지금 바로 시작하기
          </Button>
          <div className="flex justify-center gap-4 text-lg font-bold">
            <span className="text-foreground">#러닝인증</span>
            <span className="text-foreground">#나만의길</span>
            <span className="text-foreground">#PathDesign</span>
          </div>
        </div>
      </section>

      {/* Scrolling Information Banner */}
      <div className="bg-card text-card-foreground py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
          <span className="text-xl font-black mx-8">MORE INFORMATION</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4">PathDesign</h3>
              <p className="text-muted-foreground">운동을 작품으로 만드는 앱</p>
            </div>
            <div>
              <h4 className="font-black mb-4">제품</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>기능 소개</li>
                <li>요금제</li>
                <li>업데이트</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">지원</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>도움말</li>
                <li>문의하기</li>
                <li>커뮤니티</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">회사</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>소개</li>
                <li>채용</li>
                <li>블로그</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PathDesign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
