import Deck from "./Deck";
import Filters from "./filters/Filters";

export default function Content() {
  return (
    <div className="bg-slate-100 min-h-content relative">
      <Deck />
      <Filters />
    </div>
  );
}
