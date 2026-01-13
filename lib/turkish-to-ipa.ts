interface TranscriptionOptions {
  broad: boolean
}

const vowelMap: Record<string, string> = {
  a: "ɑ", // Back unrounded low
  e: "e", // Front unrounded mid
  ı: "ɯ", // Back unrounded high
  i: "i", // Front unrounded high
  o: "o", // Back rounded mid
  ö: "ø", // Front rounded mid
  u: "u", // Back rounded high
  ü: "y", // Front rounded high
  â: "aː", // Long fronted a
  î: "iː", // Long i
  û: "uː", // Long u
}

const consonantMap: Record<string, string> = {
  b: "b",
  c: "d͡ʒ",
  ç: "t͡ʃ",
  d: "d",
  f: "f",
  g: "ɡ",
  h: "h",
  j: "ʒ",
  k: "k", // Will be modified based on context
  l: "l", // Will be modified based on context
  m: "m",
  n: "n",
  p: "p",
  r: "ɾ",
  s: "s",
  ş: "ʃ",
  t: "t",
  v: "v",
  y: "j",
  z: "z",
}

function isFrontVowel(char: string): boolean {
  return "eiöüEİÖÜ".includes(char)
}

function isBackVowel(char: string): boolean {
  return "aıouAIOU".includes(char)
}

function isVowel(char: string): boolean {
  return "aeıioöuüâîûAEIİOÖUÜÂÎÛ".includes(char)
}

function isConsonant(char: string): boolean {
  return "bcçdfgğhjklmnprsştvyzBCÇDFGĞHJKLMNPRSŞTVYZ".includes(char)
}

function applyFinalDevoicing(word: string): string {
  const lastChar = word[word.length - 1].toLowerCase()
  const devoicingMap: Record<string, string> = {
    b: "p",
    c: "t͡ʃ",
    d: "t",
    g: "k",
  }
  return devoicingMap[lastChar] || lastChar
}

function transcribeWord(word: string, options: TranscriptionOptions): string {
  let result = ""
  const chars = word.toLowerCase().split("")
  const originalWord = word.toLowerCase()

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    const prev = i > 0 ? chars[i - 1] : ""
    const next = i < chars.length - 1 ? chars[i + 1] : ""
    const isLastChar = i === chars.length - 1

    // Skip punctuation
    if (char.match(/[\s.,!?;:\-()'"]/)) {
      continue
    }

    if (char === "ğ") {
      if (result.length > 0 && isVowel(prev)) {
        result += "ː"
      }
      continue
    }

    if (vowelMap[char]) {
      result += vowelMap[char]
      continue
    }

    if (char === "l") {
      // Check surrounding vowels
      const prevIsFront = prev && isFrontVowel(prev)
      const nextIsFront = next && isFrontVowel(next)
      const prevIsBack = prev && isBackVowel(prev)
      const nextIsBack = next && isBackVowel(next)

      // Light l before/after front vowels
      if (prevIsFront || nextIsFront) {
        result += "l"
      }
      // Dark/velarized l before/after back vowels
      else if (prevIsBack || nextIsBack) {
        result += "ɫ"
      }
      // Word-final l after back vowels
      else if (isLastChar && prevIsBack) {
        result += "ɫ"
      }
      // Default to light l
      else {
        result += "l"
      }
      continue
    }

    if (char === "k") {
      const prevIsFront = prev && isFrontVowel(prev)
      const nextIsFront = next && isFrontVowel(next)

      // Palatal stop before/after front vowels
      if (prevIsFront || nextIsFront) {
        result += "c"
      }
      // Velar stop otherwise
      else {
        result += "k"
      }
      continue
    }

    if (char === "g") {
      const prevIsFront = prev && isFrontVowel(prev)
      const nextIsFront = next && isFrontVowel(next)

      if (prevIsFront || nextIsFront) {
        result += "ɟ" // Palatal voiced stop
      } else {
        result += "ɡ" // Velar voiced stop
      }
      continue
    }

    if (isLastChar && "bcdg".includes(char)) {
      const devoiced = applyFinalDevoicing(char)
      result += devoiced
      continue
    }

    if (char === "n" && next && "kgKG".includes(next)) {
      result += "ŋ" // Velar nasal
      continue
    }

    // Standard consonants
    if (consonantMap[char]) {
      result += consonantMap[char]
    } else {
      result += char
    }
  }

  return result
}

export function turkishToIPA(text: string, options: TranscriptionOptions): string {
  if (!text) return ""

  // Split by whitespace and punctuation, but keep punctuation
  const tokens = text.split(/(\s+|[.,!?;:—\-()'"«»""])/g)

  const transcribedTokens = tokens.map((token) => {
    // Skip empty tokens
    if (!token) return ""

    // Keep whitespace and punctuation as-is
    if (token.match(/^[\s.,!?;:—\-()'"«»""]+$/)) {
      return token
    }

    // Transcribe words
    const transcribed = transcribeWord(token, options)
    return options.broad ? `/${transcribed}/` : `[${transcribed}]`
  })

  return transcribedTokens.join("")
}
