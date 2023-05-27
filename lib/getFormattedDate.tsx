export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("tr-TR", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
