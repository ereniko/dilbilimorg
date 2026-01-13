"use client"

import { useState } from "react"
import { Moon, Sun, ArrowLeft, Mail, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background ${isDark ? "dark" : ""}`}>
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                dilbilim.org.tr
              </span>
              <span className="text-sm text-muted-foreground hidden sm:inline">/ İletişim</span>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>

          <Card className="p-8 border-border">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-6">İletişim</h1>

            <div className="space-y-8">
              <section>
                <p className="text-foreground/90 leading-relaxed mb-6">
                  dilbilim.org.tr hakkında sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime
                  geçebilirsiniz. Akademik işbirlikleri ve proje geliştirme önerileri için de her zaman açığız.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">İletişim Kanalları</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:iletisim@dilbilim.org.tr"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-posta</h3>
                      <p className="text-sm text-muted-foreground">iletisim@dilbilim.org.tr</p>
                    </div>
                  </a>

                  

                  
                </div>
              </section>

              <section>
                <h2 className="text-xl font-serif font-semibold text-foreground mb-3">Sık Sorulan Sorular</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Bu araç ücretsiz mi?</h3>
                    <p className="text-sm text-muted-foreground">
                      Evet, dilbilim.org.tr tamamen ücretsizdir ve kar amacı gütmemektedir.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Verilerim saklanıyor mu?</h3>
                    <p className="text-sm text-muted-foreground">
                      Hayır, girdiğiniz tüm metinler yalnızca tarayıcınızda işlenir ve hiçbir veri sunucularımızda
                      saklanmaz.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Hata bildirimi nasıl yapabilirim?</h3>
                    <p className="text-sm text-muted-foreground">
                      Tespit ettiğiniz hataları ve önerilerinizi e-posta üzerinden bildirebilirsiniz.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2026 dilbilim.org.tr | Gültekin, E. (2026). <em>Dilbilim araştırma portalı</em>. https://dilbilim.org.tr
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
