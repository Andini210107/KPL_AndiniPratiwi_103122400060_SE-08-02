const sekarang = new Date();

const formatTanggal = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

console.log(formatTanggal.format(sekarang));