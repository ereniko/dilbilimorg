"use client"

import { useState } from "react"
import { Moon, Sun, Volume2, Copy, BookOpen, ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { turkishToIPA } from "@/lib/turkish-to-ipa"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function TranscriberPage() {
  const [isDark, setIsDark] = useState(false)
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [broadTranscription, setBroadTranscription] = useState(true)
  const [showReference, setShowReference] = useState(false)
  const { toast } = useToast()

  const handleTranscribe = () => {
    const transcribed = turkishToIPA(inputText, {
      broad: broadTranscription,
    })
    setOutputText(transcribed)
  }

  const handleClear = () => {
    setInputText("")
    setOutputText("")
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText)
      toast({
        title: "Başarıyla Kopyalandı",
        description: "IPA transkripsiyon panoya kopyalandı.",
      })
    } catch (err) {
      toast({
        title: "Hata",
        description: "Kopyalama işlemi başarısız oldu.",
        variant: "destructive",
      })
    }
  }

  const handlePlayAudio = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(inputText)
      utterance.lang = "tr-TR"
      window.speechSynthesis.speak(utterance)
    } else {
      toast({
        title: "Uyarı",
        description: "Sesli okuma bu tarayıcıda desteklenmiyor.",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    if (!outputText) return
    const blob = new Blob([outputText], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ipa-transkripsiyon.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "İndirildi",
      description: "IPA transkripsiyon dosyası indirildi.",
    })
  }

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
              <span className="text-sm text-muted-foreground hidden sm:inline">/ IPA Çevirici</span>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReference(!showReference)}
                className="text-muted-foreground hover:text-foreground"
              >
                <BookOpen className="h-5 w-5" />
              </Button>
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
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-12">
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">IPA Fonetik Transkripsiyon</h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Türkçe metinleri Uluslararası Fonetik Alfabe (IPA) formatına dönüştürün. Akademik düzeyde, Türkiye
              Türkçesi söyleyiş kurallarına dayalı transkripsiyon aracı.
            </p>
          </div>

          {showReference && (
            <Card className="p-6 border-border bg-muted/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">IPA Referans Tablosu</h3>
                  <p className="text-sm text-muted-foreground mt-1">Türkçe ses birimleri ve IPA karşılıkları</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowReference(false)}>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4 font-serif">Ünlüler (Vowels)</h4>
                  <div className="space-y-2">
                    {[
                      ["a", "ɑ", "Arka açık ünlü"],
                      ["e", "e", "Ön yarı açık ünlü"],
                      ["ı", "ɯ", "Arka dar ünlü"],
                      ["i", "i", "Ön dar ünlü"],
                      ["o", "o", "Arka yarı dar yuvarlak"],
                      ["ö", "ø", "Ön yarı açık yuvarlak"],
                      ["u", "u", "Arka dar yuvarlak"],
                      ["ü", "y", "Ön dar yuvarlak"],
                    ].map(([letter, ipa, desc]) => (
                      <div
                        key={letter}
                        className="flex items-center justify-between p-3 rounded-md bg-background border border-border hover:border-foreground/20 transition-colors"
                      >
                        <span className="font-mono text-foreground font-medium">{letter}</span>
                        <span className="font-mono text-primary text-lg">{ipa}</span>
                        <span className="text-xs text-muted-foreground hidden lg:block">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4 font-serif">Ünsüzler (Consonants)</h4>
                  <div className="space-y-2">
                    {[
                      ["c", "d͡ʒ", "Ötümlü postalveolar affricate"],
                      ["ç", "t͡ʃ", "Ötümsüz postalveolar affricate"],
                      ["ğ", "ː", "Uzatma işareti"],
                      ["j", "ʒ", "Ötümlü postalveolar frikatif"],
                      ["r", "ɾ", "Çarpmalı r"],
                      ["ş", "ʃ", "Ötümsüz postalveolar frikatif"],
                      ["y", "j", "Damak yarı ünlüsü"],
                      ["k (ön)", "c", "Damaksıl k"],
                      ["k (arka)", "k", "Art damaksıl k"],
                      ["l (açık)", "l", "Açık l"],
                      ["l (koyu)", "ɫ", "Velarize l"],
                    ].map(([letter, ipa, desc]) => (
                      <div
                        key={letter}
                        className="flex items-center justify-between p-3 rounded-md bg-background border border-border hover:border-foreground/20 transition-colors"
                      >
                        <span className="font-mono text-foreground font-medium">{letter}</span>
                        <span className="font-mono text-primary text-lg">{ipa}</span>
                        <span className="text-xs text-muted-foreground hidden lg:block">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-serif font-semibold text-foreground">Türkçe Metin</Label>
                  <span className="text-xs text-muted-foreground">{inputText.length} karakter</span>
                </div>

                <Textarea
                  placeholder="Çevirmek istediğiniz Türkçe metni buraya yazın..."
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value)
                    const transcribed = turkishToIPA(e.target.value, { broad: broadTranscription })
                    setOutputText(transcribed)
                  }}
                  className="min-h-[400px] resize-none font-sans text-base leading-relaxed"
                />

                <div className="flex gap-3">
                  <Button
                    onClick={handlePlayAudio}
                    disabled={!inputText.trim()}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Volume2 className="h-4 w-4 mr-2" />
                    Seslendir
                  </Button>
                  <Button
                    onClick={handleClear}
                    disabled={!inputText && !outputText}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    Temizle
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-muted/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-serif font-semibold text-foreground">IPA Transkripsiyon</Label>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleDownload} disabled={!outputText}>
                      <Download className="h-4 w-4 mr-2" />
                      İndir
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleCopy} disabled={!outputText}>
                      <Copy className="h-4 w-4 mr-2" />
                      Kopyala
                    </Button>
                  </div>
                </div>

                <div className="min-h-[400px] p-4 rounded-lg border border-border bg-background font-mono text-base leading-relaxed whitespace-pre-wrap break-words">
                  {outputText || (
                    <span className="text-muted-foreground italic font-sans">
                      IPA transkripsiyon sonucu burada görünecektir...
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex-1">
                    <Label htmlFor="broad" className="text-sm font-medium cursor-pointer">
                      {broadTranscription ? "Geniş Transkripsiyon /.../" : "Dar Transkripsiyon [...]"}
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      {broadTranscription ? "Fonemik gösterim" : "Fonetik detay"}
                    </p>
                  </div>
                  <Switch
                    id="broad"
                    checked={broadTranscription}
                    onCheckedChange={(checked) => {
                      setBroadTranscription(checked)
                      if (inputText) {
                        const transcribed = turkishToIPA(inputText, { broad: checked })
                        setOutputText(transcribed)
                      }
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Kaynak:</span> Ergenç, İ. (2002).{" "}
                <em>Türkiye Türkçesinin söyleyiş sözlüğü</em>. Multilingual.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <Link href="/hakkinda" className="text-muted-foreground hover:text-foreground transition-colors">
                  Platform Hakkında
                </Link>
                <span className="text-muted-foreground/30">•</span>
                <Link href="/terim-sozlugu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terim Sözlüğü
                </Link>
                <span className="text-muted-foreground/30">•</span>
                <Link href="/sozdizimi-agaci" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sözdizimi Ağacı
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
