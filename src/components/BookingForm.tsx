import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  X, Minus, Plus, Send, Banknote, Landmark, Check, User, MapPin, CalendarDays,
  Users, Package, ChevronDown, Info, Compass,
} from 'lucide-react';
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
    eyebrow: 'Pemesanan',
    title: 'Form Pemesanan Trip',
    intro: 'Isi data berikut. Setelah dikirim, pesanmu disiapkan di WhatsApp Banggai Paradise dan tim akan membalas dengan penawaran tertulis.',
    s1: 'Data tamu',
    s2: 'Rencana perjalanan',
    s3: 'Pembayaran',
    name: 'Nama tamu',
    namePh: 'Nama lengkap sesuai identitas',
    date: 'Tanggal trip',
    origin: 'Asal tamu',
    originPh: 'Kota atau negara asal',
    guests: 'Jumlah tamu',
    guestsUnit: 'orang',
    less: 'Kurangi tamu',
    more: 'Tambah tamu',
    pkg: 'Pilihan paket',
    pkgPh: 'Pilih paket atau custom trip',
    custom: 'Rencana paket kostum',
    customPh: 'Ceritakan durasi, destinasi yang ingin dikunjungi, dan kebutuhan khusus (anak, mobilitas, dll.)',
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
    eyebrow: 'Booking',
    title: 'Trip Booking Form',
    intro: 'Fill in the details below. After you send it, your message is prepared in Banggai Paradise WhatsApp and the team replies with a written proposal.',
    s1: 'Guest details',
    s2: 'Trip plan',
    s3: 'Payment',
    name: 'Guest name',
    namePh: 'Full name as on your ID',
    date: 'Trip date',
    origin: 'Guest origin',
    originPh: 'City or country you travel from',
    guests: 'Number of guests',
    guestsUnit: 'guests',
    less: 'Fewer guests',
    more: 'More guests',
    pkg: 'Package',
    pkgPh: 'Choose a package or a custom trip',
    custom: 'Custom package plan',
    customPh: 'Tell us the duration, places you want to visit and any special needs (children, mobility, etc.)',
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
    eyebrow: 'Reserva',
    title: 'Formulario de reserva',
    intro: 'Completa los datos. Al enviarlos, tu mensaje se prepara en el WhatsApp de Banggai Paradise y el equipo responde con una propuesta por escrito.',
    s1: 'Datos del huésped',
    s2: 'Plan del viaje',
    s3: 'Pago',
    name: 'Nombre del huésped',
    namePh: 'Nombre completo como en tu documento',
    date: 'Fecha del viaje',
    origin: 'Procedencia del huésped',
    originPh: 'Ciudad o país de origen',
    guests: 'Número de huéspedes',
    guestsUnit: 'personas',
    less: 'Menos personas',
    more: 'Más personas',
    pkg: 'Paquete',
    pkgPh: 'Elige un paquete o un viaje a medida',
    custom: 'Plan del paquete a medida',
    customPh: 'Cuéntanos la duración, los lugares que quieres visitar y necesidades especiales (niños, movilidad, etc.)',
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

  type Choice = typeof PACKAGE_CHOICES[number];
  const choiceTitle = useCallback((c: Choice) =>
    language === 'ID' ? c.titleId : language === 'ES' ? c.titleEs : c.titleEn, [language]);
  const choiceDuration = useCallback((c: Choice) =>
    language === 'ID' ? c.durationId : language === 'ES' ? c.durationEs : c.durationEn, [language]);
  const choiceDesc = (c: Choice) =>
    language === 'ID' ? c.descriptionId : language === 'ES' ? c.descriptionEs : c.descriptionEn;

  const chosen = PACKAGE_CHOICES.find((c) => c.id === pkgId);
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
      const order: Field[] = ['name', 'origin', 'date', 'guests', 'pkg', 'custom', 'payment'];
      const firstBad = order.find((f) => found[f]);
      if (firstBad) dialogRef.current?.querySelector<HTMLElement>(`[data-field="${firstBad}"]`)?.focus();
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    setWaUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const err = (f: Field) =>
    errors[f] ? <p id={`bf-${f}-err`} className="bf-err" role="alert">{errors[f]}</p> : null;
  const invalid = (f: Field) => (errors[f] ? ' is-invalid' : '');
  const describedBy = (f: Field) => (errors[f] ? `bf-${f}-err` : undefined);

  return (
    <div className="bf-root" role="presentation">
      <div className="bf-backdrop" onClick={onClose} />
      <div className="bf-wrap">
        <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="bf-title" className="bf-card">
          <header className="bf-head">
            <span className="bf-eyebrow"><Compass aria-hidden="true" />{t.eyebrow}</span>
            <h2 id="bf-title" className="bf-title">{t.title}</h2>
            <p className="bf-intro">{t.intro}</p>
            <button type="button" onClick={onClose} className="bf-close" aria-label={t.close}>
              <X aria-hidden="true" />
            </button>
          </header>

          <div className="bf-body">
            {waUrl ? (
              <div className="bf-done" aria-live="polite">
                <span className="bf-done-ico"><Check aria-hidden="true" /></span>
                <h3>{t.doneTitle}</h3>
                <p>{t.doneBody}</p>
                <div className="bf-actions">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="bf-btn bf-btn-primary">
                    <Send aria-hidden="true" />{t.openAgain}
                  </a>
                  <button type="button" onClick={() => setWaUrl('')} className="bf-btn bf-btn-ghost">
                    {t.edit}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <section className="bf-section">
                  <h3 className="bf-section-title"><span className="bf-num">1</span>{t.s1}</h3>
                  <div className="bf-grid">
                    <div className="bf-field bf-full" style={{ gridColumn: '1 / -1' }}>
                      <label htmlFor="bf-name" className="bf-label">{t.name}</label>
                      <div className="bf-ctrl">
                        <User className="bf-ico" aria-hidden="true" />
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
                          aria-describedby={describedBy('name')}
                          className={`bf-input${invalid('name')}`}
                        />
                      </div>
                      {err('name')}
                    </div>

                    <div className="bf-field" style={{ gridColumn: '1 / -1' }}>
                      <label htmlFor="bf-origin" className="bf-label">{t.origin}</label>
                      <div className="bf-ctrl">
                        <MapPin className="bf-ico" aria-hidden="true" />
                        <input
                          id="bf-origin"
                          data-field="origin"
                          type="text"
                          autoComplete="address-level2"
                          value={origin}
                          onChange={(e) => setOrigin(e.target.value)}
                          placeholder={t.originPh}
                          aria-invalid={Boolean(errors.origin)}
                          aria-describedby={describedBy('origin')}
                          className={`bf-input${invalid('origin')}`}
                        />
                      </div>
                      {err('origin')}
                    </div>
                  </div>
                </section>

                <section className="bf-section">
                  <h3 className="bf-section-title"><span className="bf-num">2</span>{t.s2}</h3>
                  <div className="bf-grid">
                    <div className="bf-field">
                      <label htmlFor="bf-date" className="bf-label">{t.date}</label>
                      <div className="bf-ctrl">
                        <CalendarDays className="bf-ico" aria-hidden="true" />
                        <input
                          id="bf-date"
                          data-field="date"
                          type="date"
                          min={today}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          aria-invalid={Boolean(errors.date)}
                          aria-describedby={describedBy('date')}
                          className={`bf-input${invalid('date')}`}
                        />
                      </div>
                      {err('date')}
                    </div>

                    <div className="bf-field">
                      <label htmlFor="bf-guests" className="bf-label">{t.guests}</label>
                      <div className={`bf-stepper${invalid('guests')}`}>
                        <button
                          type="button"
                          className="bf-step"
                          onClick={() => setGuests((g) => Math.max(1, (Number.isFinite(g) ? g : 1) - 1))}
                          aria-label={t.less}
                        >
                          <Minus aria-hidden="true" />
                        </button>
                        <input
                          id="bf-guests"
                          data-field="guests"
                          className="bf-count"
                          type="number"
                          inputMode="numeric"
                          min={1}
                          max={MAX_GUESTS}
                          value={Number.isFinite(guests) ? guests : ''}
                          onChange={(e) => setGuests(e.target.value === '' ? NaN : parseInt(e.target.value, 10))}
                          aria-invalid={Boolean(errors.guests)}
                          aria-describedby={describedBy('guests')}
                        />
                        <span className="bf-unit">{t.guestsUnit}</span>
                        <button
                          type="button"
                          className="bf-step"
                          onClick={() => setGuests((g) => Math.min(MAX_GUESTS, (Number.isFinite(g) ? g : 0) + 1))}
                          aria-label={t.more}
                        >
                          <Plus aria-hidden="true" />
                        </button>
                      </div>
                      {err('guests')}
                    </div>

                    <div className="bf-field" style={{ gridColumn: '1 / -1' }}>
                      <label htmlFor="bf-pkg" className="bf-label">{t.pkg}</label>
                      <div className="bf-ctrl">
                        <Package className="bf-ico" aria-hidden="true" />
                        <select
                          id="bf-pkg"
                          data-field="pkg"
                          value={pkgId}
                          onChange={(e) => setPkgId(e.target.value)}
                          aria-invalid={Boolean(errors.pkg)}
                          aria-describedby={describedBy('pkg')}
                          className={`bf-input bf-select${invalid('pkg')}`}
                        >
                          <option value="">{t.pkgPh}</option>
                          {PACKAGE_CHOICES.map((c) => (
                            <option key={c.id} value={c.id}>{choiceTitle(c)} · {choiceDuration(c)}</option>
                          ))}
                        </select>
                        <ChevronDown className="bf-chev" aria-hidden="true" />
                      </div>
                      {err('pkg')}
                      {chosen && (
                        <div className="bf-info">
                          <span className="bf-pill">{choiceDuration(chosen)}</span>
                          <span>{choiceDesc(chosen)}</span>
                        </div>
                      )}
                    </div>

                    {isCustom && (
                      <div className="bf-field" style={{ gridColumn: '1 / -1' }}>
                        <label htmlFor="bf-custom" className="bf-label">{t.custom}</label>
                        <div className="bf-ctrl is-area">
                          <Compass className="bf-ico" aria-hidden="true" />
                          <textarea
                            id="bf-custom"
                            data-field="custom"
                            rows={4}
                            value={customPlan}
                            onChange={(e) => setCustomPlan(e.target.value)}
                            placeholder={t.customPh}
                            aria-invalid={Boolean(errors.custom)}
                            aria-describedby={describedBy('custom')}
                            className={`bf-input bf-area${invalid('custom')}`}
                          />
                        </div>
                        {err('custom')}
                      </div>
                    )}
                  </div>
                </section>

                <section className="bf-section">
                  <h3 className="bf-section-title"><span className="bf-num">3</span>{t.s3}</h3>
                  <div className={`bf-pay${invalid('payment')}`} role="radiogroup" aria-label={t.s3} aria-describedby={describedBy('payment')}>
                    {([
                      { value: 'cash', label: t.cash, hint: t.cashHint, Icon: Banknote },
                      { value: 'transfer', label: t.transfer, hint: t.transferHint, Icon: Landmark },
                    ] as const).map(({ value, label, hint, Icon }) => (
                      <label key={value} className={`bf-pay-opt${payment === value ? ' is-on' : ''}`}>
                        <input
                          type="radio"
                          name="bf-payment"
                          data-field={value === 'cash' ? 'payment' : undefined}
                          value={value}
                          checked={payment === value}
                          onChange={() => setPayment(value)}
                        />
                        <span className="bf-pay-ico"><Icon aria-hidden="true" /></span>
                        <span className="bf-pay-txt"><b>{label}</b><small>{hint}</small></span>
                        <span className="bf-pay-check"><Check aria-hidden="true" /></span>
                      </label>
                    ))}
                  </div>
                  {err('payment')}
                </section>

                <p className="bf-note"><Info aria-hidden="true" /><span>{t.note}</span></p>

                <button type="submit" className="bf-submit">
                  <Send aria-hidden="true" />{t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
