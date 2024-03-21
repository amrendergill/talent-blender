import { Card } from "../ui/card"

const Sidebar = () => {
  return (
    <div>
      <Card className="p-2">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">Filter</p>
          <p className="text-[#E5042D] text-sm">Clear all</p>
        </div>
      </Card>
    </div>
  );
}

export default Sidebar