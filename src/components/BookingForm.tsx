import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Minus, Plus, Send, Banknote, Landmark, Check } from 'lucide-react';
import { Language } from '../i18n/translations';
import { PACKAGE_CHOICES } from './TourPackages';

const WHATSAPP_NUMBER = '6285820830530';
const CUSTOM_PACKAGE_ID = 'custom-banggai-trip';
const MAX_GUESTS = 50;

type Payment = 'cash' | 'transfer' | '';
type Field = 'name' | 'date' | 'origin' | 'guests' | 'pkg' | 'custom' | 'payment';

interface BookingFormProps {
  onClose: () => void;
  language: Language;
}

const TEXT = {
  ID: {
    title: 'Form Pemesanan Trip',
    intro: 'Isi data berikut. Setelah dikirim, pesanmu disiapkan di WhatsApp Banggai Paradise dan tim akan membalas dengan penawaran tertulis.',
    name: 'Nama tamu',
    namePh: 'Nama lengkap sesuai identitas',
    date: 'Tanggal trip',
    origin: 'Asal tamu',
    originPh: 'Kota atau negara asal',
    guests: 'Jumlah tamu',
    guestsUnit: 'orang',
    pkg: 'Pilihan paket',
    pkgPh: 'Pilih paket atau custom trip',
    custom: 'Rencana paket kostum',
    customPh: 'Ceritakan durasi, destinasi yang ingin dikunjungi, dan kebutuhan khusus (anak, mobilitas, dll.)',
    payment: 'Jenis pembayaran',
    cash: 'Cash',
    cashHint: 'Dibayar tunai',
    transfer: 'Transfer',
    transferHint: 'Transfer bank',
    note: 'Ketersediaan, harga, dan rincian pembayaran dikonfirmasi tim lewat penawaran tertulis sebelum kamu membayar uang muka.',
    submit: 'Kirim lewat WhatsApp',
    close: 'Tutup',
    required: 'Wajib diisi',
    nameErr: 'Isi nama tamu (minimal 2 huruf)',
    dateErr: 'Pilih tanggal trip hari ini atau setelahnya',
    guestsErr: `Jumlah tamu 1 sampai ${MAX_GUESTS}`,
    customErr: 'Jelaskan rencana paket kostum (minimal 5 karakter)',
    paymentErr: 'Pilih cash atau transfer',
    doneTitle: 'Pesan siap dikirim',
    doneBody: 'WhatsApp dibuka di tab baru dengan data pemesananmu. Tekan kirim di WhatsApp agar tim menerimanya. Jika tidak terbuka, gunakan tombol di bawah.',
    openAgain: 'Buka WhatsApp lagi',
    edit: 'Ubah data',
  },
  EN: {
    title: 'Trip Booking Form',
    intro: 'Fill in the details below. After you send it, your message is prepared in Banggai Paradise WhatsApp and the team replies with a written proposal.',
    name: 'Guest name',
    namePh: 'Full name as on your ID',
    date: 'Trip date',
    origin: 'Guest origin',
    originPh: 'City or country you travel from',
    guests: 'Number of guests',
    guestsUnit: 'guests',
    pkg: 'Package',
    pkgPh: 'Choose a package or a custom trip',
    custom: 'Custom package plan',
    customPh: 'Tell us the duration, places you want to visit and any special needs (children, mobility, etc.)',
    payment: 'Payment type',
    cash: 'Cash',
    cashHint: 'Pay in cash',
    transfer: 'Transfer',
    transferHint: 'Bank transfer',
    note: 'Availability, price and payment details are confirmed by the team in a written proposal before you pay a deposit.',
    submit: 'Send via WhatsApp',
    close: 'Close',
    required: 'Required',
    nameErr: 'Enter the guest name (at least 2 letters)',
    dateErr: 'Pick today or a later date',
    guestsErr: `Guests must be 1 to ${MAX_GUESTS}`,
    customErr: 'Describe your custom plan (at least 5 characters)',
    paymentErr: 'Choose cash or transfer',
    doneTitle: 'Your message is ready',
    doneBody: 'WhatsApp opened in a new tab with your booking details. Press send in WhatsApp so the team receives it. If it did not open, use the button below.',
    openAgain: 'Open WhatsApp again',
    edit: 'Edit details',
  },
  ES: {
    title: 'Formulario de reserva',
    intro: 'Completa los datos. Al enviarlos, tu mensaje se prepara en el WhatsApp de Banggai Paradise y el equipo responde con una propuesta por escrito.',
    name: 'Nombre del huésped',
    namePh: 'Nombre completo como en tu documento',
    date: 'Fecha del viaje',
    origin: 'Procedencia del huésped',
    originPh: 'Ciudad o país de origen',
    guests: 'Número de huéspedes',
    guestsUnit: 'personas',
    pkg: 'Paquete',
    pkgPh: 'Elige un paquete o un viaje a medida',
    custom: 'Plan del paquete a medida',
    customPh: 'Cuéntanos la duración, los lugares que quieres visitar y necesidades especiales (niños, movilidad, etc.)',
    payment: 'Tipo de pago',
    cash: 'Efectivo',
    cashHint: 'Pago en efectivo',
    transfer: 'Transferencia',
    transferHint: 'Transferencia bancaria',
    note: 'La disponibilidad, el precio y los detalles de pago los confirma el equipo en una propuesta por escrito antes de que pagues un depósito.',
    submit: 'Enviar por WhatsApp',
    close: 'Cerrar',
    required: 'Obligatorio',
    nameErr: 'Escribe el nombre del huésped (mínimo 2 letras)',
    dateErr: 'Elige hoy o una fecha posterior',
    guestsErr: `El número de personas debe ser de 1 a ${MAX_GUESTS}`,
    customErr: 'Describe tu plan a medida (mínimo 5 caracteres)',
    paymentErr: 'Elige efectivo o transferencia',
    doneTitle: 'Tu mensaje está listo',
    doneBody: 'WhatsApp se abrió en una pestaña nueva con los datos de tu reserva. Pulsa enviar en WhatsApp para que el equipo lo reciba. Si no se abrió, usa el botón de abajo.',
    openAgain: 'Abrir WhatsApp de nuevo',
    edit: 'Editar datos',
  },
} as const;

const localDateString = (d: Date) => {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const prettyDate = (iso: string, language: Language) => {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  const locale = language === 'ID' ? 'id-ID' : language === 'ES' ? 'es-ES' : 'en-GB';
  return new Date(y, m - 1, d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
};

const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-base text-[#0A3A40] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
    invalid
      ? 'border-red-400 focus:ring-red-200 focus:border-red-500'
      : 'border-slate-300 focus:ring-[#F26A4F]/30 focus:border-[#F26A4F]'
  }`;

export const BookingForm: React.FC<BookingFormProps> = ({ onClose, language }) => {
  const t = TEXT[language === 'ID' ? 'ID' : language === 'ES' ? 'ES' : 'EN'];
  const today = useMemo(() => localDateString(new Date()), []);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [origin, setOrigin] = useState('');
  const [guests, setGuests] = useState(2);
  const [pkgId, setPkgId] = useState('');
  const [customPlan, setCustomPlan] = useState('');
  const [payment, setPayment] = useState<Payment>('');
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [waUrl, setWaUrl] = useState('');

  const firstRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    firstRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const choiceTitle = (c: typeof PACKAGE_CHOICES[number]) =>
    language === 'ID' ? c.titleId : language === 'ES' ? c.titleEs : c.titleEn;
  const choiceDuration = (c: typeof PACKAGE_CHOICES[number]) =>
    language === 'ID' ? c.durationId : language === 'ES' ? c.durationEs : c.durationEn;

  const isCustom = pkgId === CUSTOM_PACKAGE_ID;

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (name.trim().length < 2) next.name = t.nameErr;
    if (!date || date < today) next.date = t.dateErr;
    if (!origin.trim()) next.origin = t.required;
    if (!Number.isInteger(guests) || guests < 1 || guests > MAX_GUESTS) next.guests = t.guestsErr;
    if (!pkgId) next.pkg = t.required;
    if (isCustom && customPlan.trim().length < 5) next.custom = t.customErr;
    if (!payment) next.payment = t.paymentErr;
    setErrors(next);
    return next;
  };

  const buildMessage = () => {
    const chosen = PACKAGE_CHOICES.find((c) => c.id === pkgId);
    const pkgLine = chosen ? `${choiceTitle(chosen)} (${choiceDuration(chosen)})` : '';
    const payLabel = payment === 'cash' ? t.cash : t.transfer;
    const lines =
      language === 'ID'
        ? [
            'Halo Banggai Paradise, saya ingin memesan trip.',
            '',
            `Nama tamu: ${name.trim()}`,
            `Tanggal trip: ${prettyDate(date, language)}`,
            `Asal tamu: ${origin.trim()}`,
            `Jumlah tamu: ${guests} orang`,
            `Paket: ${pkgLine}`,
            ...(isCustom ? [`Rencana paket kostum: ${customPlan.trim()}`] : []),
            `Jenis pembayaran: ${payLabel}`,
            '',
            'Mohon info ketersediaan, harga, dan penawaran tertulisnya. Terima kasih.',
          ]
        : language === 'ES'
        ? [
            'Hola, Banggai Paradise. Quiero reservar un viaje.',
            '',
            `Nombre del huésped: ${name.trim()}`,
            `Fecha del viaje: ${prettyDate(date, language)}`,
            `Procedencia: ${origin.trim()}`,
            `Número de personas: ${guests}`,
            `Paquete: ${pkgLine}`,
            ...(isCustom ? [`Plan a medida: ${customPlan.trim()}`] : []),
            `Tipo de pago: ${payLabel}`,
            '',
            'Por favor, confirmadme disponibilidad, precio y la propuesta por escrito. Gracias.',
          ]
        : [
            'Hello Banggai Paradise, I would like to book a trip.',
            '',
            `Guest name: ${name.trim()}`,
            `Trip date: ${prettyDate(date, language)}`,
            `Guest origin: ${origin.trim()}`,
            `Number of guests: ${guests}`,
            `Package: ${pkgLine}`,
            ...(isCustom ? [`Custom package plan: ${customPlan.trim()}`] : []),
            `Payment type: ${payLabel}`,
            '',
            'Please confirm availability, price and send a written proposal. Thank you.',
          ];
    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      const order: Field[] = ['name', 'date', 'origin', 'guests', 'pkg', 'custom', 'payment'];
      const firstBad = order.find((f) => found[f]);
      if (firstBad) dialogRef.current?.querySelector<HTMLElement>(`[data-field="${firstBad}"]`)?.focus();
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    setWaUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const errorText = (f: Field) =>
    errors[f] ? <p id={`bf-${f}-err`} className="mt-1 text-sm text-red-600" role="alert">{errors[f]}</p> : null;

  const labelClass = 'block text-sm font-semibold text-[#0A3A40] mb-1.5';

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="presentation">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="bf-title"
          className="relative bg-white rounded-3xl max-w-xl w-full text-left shadow-2xl my-6"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            <h2 id="bf-title" className="text-2xl font-extrabold text-[#0A3A40] pr-10">{t.title}</h2>

            {waUrl ? (
              <div className="mt-6" aria-live="polite">
                <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-bold text-emerald-900">{t.doneTitle}</p>
                    <p className="mt-1 text-sm text-emerald-900/80">{t.doneBody}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F26A4F] hover:bg-[#EA5C40] px-6 py-3 font-bold text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    {t.openAgain}
                  </a>
                  <button
                    type="button"
                    onClick={() => setWaUrl('')}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#0A3A40] hover:bg-slate-50 transition-colors"
                  >
                    {t.edit}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-2">
                <p className="text-sm text-slate-600">{t.intro}</p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="bf-name" className={labelClass}>{t.name}</label>
                    <input
                      ref={firstRef}
                      id="bf-name"
                      data-field="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePh}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'bf-name-err' : undefined}
                      className={inputClass(Boolean(errors.name))}
                    />
                    {errorText('name')}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="bf-date" className={labelClass}>{t.date}</label>
                      <input
                        id="bf-date"
                        data-field="date"
                        type="date"
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        aria-invalid={Boolean(errors.date)}
                        aria-describedby={errors.date ? 'bf-date-err' : undefined}
                        className={inputClass(Boolean(errors.date))}
                      />
                      {errorText('date')}
                    </div>
                    <div>
                      <label htmlFor="bf-origin" className={labelClass}>{t.origin}</label>
                      <input
                        id="bf-origin"
                        data-field="origin"
                        type="text"
                        autoComplete="address-level2"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder={t.originPh}
                        aria-invalid={Boolean(errors.origin)}
                        aria-describedby={errors.origin ? 'bf-origin-err' : undefined}
                        className={inputClass(Boolean(errors.origin))}
                      />
                      {errorText('origin')}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bf-guests" className={labelClass}>{t.guests}</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, (Number.isFinite(g) ? g : 1) - 1))}
                        className="h-12 w-12 shrink-0 rounded-xl border border-slate-300 flex items-center justify-center text-[#0A3A40] hover:bg-slate-50 transition-colors"
                        aria-label="-1"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        id="bf-guests"
                        data-field="guests"
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={MAX_GUESTS}
                        value={Number.isFinite(guests) ? guests : ''}
                        onChange={(e) => setGuests(e.target.value === '' ? NaN : parseInt(e.target.value, 10))}
                        aria-invalid={Boolean(errors.guests)}
                        aria-describedby={errors.guests ? 'bf-guests-err' : undefined}
                        className={`${inputClass(Boolean(errors.guests))} text-center`}
                      />
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(MAX_GUESTS, (Number.isFinite(g) ? g : 0) + 1))}
                        className="h-12 w-12 shrink-0 rounded-xl border border-slate-300 flex items-center justify-center text-[#0A3A40] hover:bg-slate-50 transition-colors"
                        aria-label="+1"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-slate-500 w-14">{t.guestsUnit}</span>
                    </div>
                    {errorText('guests')}
                  </div>

                  <div>
                    <label htmlFor="bf-pkg" className={labelClass}>{t.pkg}</label>
                    <select
                      id="bf-pkg"
                      data-field="pkg"
                      value={pkgId}
                      onChange={(e) => setPkgId(e.target.value)}
                      aria-invalid={Boolean(errors.pkg)}
                      aria-describedby={errors.pkg ? 'bf-pkg-err' : undefined}
                      className={inputClass(Boolean(errors.pkg))}
                    >
                      <option value="">{t.pkgPh}</option>
                      {PACKAGE_CHOICES.map((c) => (
                        <option key={c.id} value={c.id}>{choiceTitle(c)} · {choiceDuration(c)}</option>
                      ))}
                    </select>
                    {errorText('pkg')}
                  </div>

                  {isCustom && (
                    <div>
                      <label htmlFor="bf-custom" className={labelClass}>{t.custom}</label>
                      <textarea
                        id="bf-custom"
                        data-field="custom"
                        rows={4}
                        value={customPlan}
                        onChange={(e) => setCustomPlan(e.target.value)}
                        placeholder={t.customPh}
                        aria-invalid={Boolean(errors.custom)}
                        aria-describedby={errors.custom ? 'bf-custom-err' : undefined}
                        className={inputClass(Boolean(errors.custom))}
                      />
                      {errorText('custom')}
                    </div>
                  )}

                  <fieldset>
                    <legend className={labelClass}>{t.payment}</legend>
                    <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-describedby={errors.payment ? 'bf-payment-err' : undefined}>
                      {([
                        { value: 'cash', label: t.cash, hint: t.cashHint, Icon: Banknote },
                        { value: 'transfer', label: t.transfer, hint: t.transferHint, Icon: Landmark },
                      ] as const).map(({ value, label, hint, Icon }) => (
                        <label
                          key={value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors focus-within:ring-2 focus-within:ring-[#F26A4F]/30 ${
                            payment === value
                              ? 'border-[#F26A4F] bg-[#F26A4F]/5'
                              : errors.payment
                              ? 'border-red-400'
                              : 'border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="bf-payment"
                            data-field={value === 'cash' ? 'payment' : undefined}
                            value={value}
                            checked={payment === value}
                            onChange={() => setPayment(value)}
                            className="sr-only"
                          />
                          <Icon className={`w-5 h-5 shrink-0 ${payment === value ? 'text-[#F26A4F]' : 'text-slate-500'}`} />
                          <span>
                            <span className="block font-semibold text-[#0A3A40]">{label}</span>
                            <span className="block text-xs text-slate-500">{hint}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                    {errorText('payment')}
                  </fieldset>
                </div>

                <p className="mt-6 text-xs text-slate-500">{t.note}</p>

                <button
                  type="submit"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F26A4F] hover:bg-[#EA5C40] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-[#F26A4F]/30 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
