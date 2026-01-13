"use client"

import { useState } from "react"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
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
              <span className="text-sm text-muted-foreground hidden sm:inline">/ Hakkında</span>
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>

          <Card className="p-6 sm:p-8 border-border">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">Hakkında</h1>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">Proje Hakkında</h2>
                <p className="text-sm sm:text-base">
                  dilbilim.org.tr, Türkçe metinleri Uluslararası Fonetik Alfabesi (IPA) transkipsiyonuna dönüştüren, sözdizimi ağaçları oluşturan ve kapsamlı bir dilbilim terimleri sözlüğü sunan modern ve kar amacı gütmeyen bir web platformudur. Bu araç, dilbilimciler, öğretmenler, öğrenciler ve Türkçe dilbilim ile ilgilenen herkes için geliştirilmiştir.
                </p>
                <p className="text-sm sm:text-base mt-3">
                  Geliştirici: Eren Gültekin — Dilbilim ve Yönetim Bilişim Sistemleri alanlarında lisans eğitimine devam etmektedir.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">Katkıda Bulunanlar</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p className="text-muted-foreground">Bu bölüm yakında güncellenecektir.</p>
                </div>
              </section>

              

              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">Özellikler</h2>
                <ul className="list-disc list-inside space-y-2 ml-2 text-sm sm:text-base">
                  <li>IPA fonetik transkripsiyon (geniş ve dar transkripsiyon seçenekleri)</li>
                  <li>Sözdizimi ağaç çizici (parantezli notasyon, X-Bar teorisi desteği)</li>
                  <li>42+ dilbilim terimi içeren kapsamlı kavram sözlüğü</li>
                  <li>Metin analizi ve kelime sıklığı hesaplama</li>
                  <li>Morfolojik çözümleyici</li>
                  <li>Minimal çiftler veritabanı</li>
                  <li>Sesli okuma ve dosya indirme özellikleri</li>
                  <li>Tamamen ücretsiz erişim, kullanım limiti yok</li>
                  <li>Karanlık mod desteği</li>
                  <li>Mobil uyumlu, responsive tasarım</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">Kullanım Alanları</h2>
                <ul className="list-disc list-inside space-y-2 ml-2 text-sm sm:text-base">
                  <li>Dilbilim araştırmaları ve akademik çalışmalar</li>
                  <li>Türkçe öğretimi ve telaffuz eğitimi</li>
                  <li>Konuşma terapisi ve ses eğitimi</li>
                  <li>Sözlük hazırlama ve söyleyiş analizi</li>
                  <li>Yabancı dil olarak Türkçe öğretimi</li>
                  <li>Sözdizimi analizi ve ağaç diyagramları oluşturma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">Akademik Temel</h2>
                <p className="text-sm sm:text-base">
                  Platformdaki IPA transkripsiyon sistemi, Türkçe'nin fonetik özelliklerini doğru bir şekilde yansıtan
                  akademik kurallara dayanmaktadır. Sistem, damaksallaşma, kelime sonu tonsuzlaşması, ünlü uzatma ve
                  ünsüz asimilasyonu gibi fonetik olayları otomatik olarak uygular.
                </p>
                
              </section>

              <section>
                <h2 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">İletişim</h2>
                <p className="text-sm sm:text-base">
                  Her türlü öneri, hata bildirimi ve iş birliği talepleriniz için:{" "}
                  <a href="mailto:iletisim@dilbilim.org.tr" className="text-primary hover:underline">
                    iletisim@dilbilim.org.tr
                  </a>
                </p>
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
