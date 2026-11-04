import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Compass, RefreshCw, MessageCircle, Home } from 'lucide-react';
import { BanggaiLogo } from './BanggaiLogo';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Banggai Paradise Caught Error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#041E26] text-white flex flex-col justify-between items-center p-6 text-center select-none">
          <header className="py-6">
            <BanggaiLogo variant="light" size="lg" />
          </header>

          <main className="max-w-xl mx-auto space-y-6 my-auto">
            <div className="w-24 h-24 rounded-full bg-cyan-900/60 border-2 border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto shadow-2xl">
              <Compass className="w-12 h-12 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F26A4F]">
                — KENDALA SISTEM / ERROR —
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Terdampar di Perairan yang Tenang
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Terjadi sedikit kendala teknis saat memuat halaman ini. Jangan khawatir, tim lokal Banggai Paradise siap memandu Anda kembali ke jalur yang benar.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F26A4F] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Muat Ulang Halaman</span>
              </button>

              <a
                href="https://wa.me/628124567890?text=Halo%20Banggai%20Paradise,%20saya%20mengalami%20kendala%20di%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-cyan-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Bantuan WhatsApp</span>
              </a>
            </div>
          </main>

          <footer className="py-6 text-xs text-slate-500">
            © 2026 Banggai Paradise Tour &amp; Travel. Seluruh hak cipta dilindungi.
          </footer>
        </div>
      );
    }

    return this.props.children;
  }
}
