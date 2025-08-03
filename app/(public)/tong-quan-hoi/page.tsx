import Banner from "@/components/common/Banner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import CategoryTitle from "../_components/CategoryTitle"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const breadcrumbItems = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Tổng quan về hội",
    href: "/tong-quan-hoi",
  },
]

const groupMissionTabs = [
  {
    name: "Tổ Chức",
    value: "1",
    content:
      "Tổ chức, hoạt động theo Quy chế Phân Hội đã được phê duyệt. Chấp hành nghiêm các quy định của pháp luật có liên quan đến tổ chức, Điều lệ hoạt động của Hội, quy chế Phân Hộ",
  },
  {
    name: "Tập hợp",
    value: "2",
    content:
      "Tập hợp, hoạt động theo Quy chế Phân Hội đã được phê duyệt. Chấp hành nghiêm các quy định của pháp luật có liên quan đến tổ chức, Điều lệ hoạt động của Hội, quy chế Phân Hộ",
  },
  {
    name: "Nghiên cứu",
    value: "3",
    content:
      "Nghiên cứu hoạt động theo Quy chế Phân Hội đã được phê duyệt. Chấp hành nghiêm các quy định của pháp luật có liên quan đến tổ chức, Điều lệ hoạt động của Hội, quy chế Phân Hộ",
  },
  {
    name: "Tuyên truyền",
    value: "4",
    content:
      "Tuyên truyền hoạt động theo Quy chế Phân Hội đã được phê duyệt. Chấp hành nghiêm các quy định của pháp luật có liên quan đến tổ chức, Điều lệ hoạt động của Hội, quy chế Phân Hộ",
  },
]
const managerList = [
  {
    name: "Ngô bùi huy giang",
    position: "Phó chủ tịch",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Phó chủ tịch hội địa lý môi trường Việt Nam",
  },
  {
    name: "đỗ đức bình",
    position: "Chủ tịch",
    image:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nguyên Phó cục trưởng Cục Cảnh sát điều tra tội phạm về ma tuý- Bộ Công an.",
  },
  {
    name: "nguyễn trọng tuệ",
    position: "Phó chủ tịch",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Viện trưởng Viện Nghiên cứu Kiến Trúc và Văn Hóa Phương Đông",
  },
  {
    name: "Lê văn bình",
    position: "Trưởng ban tổ chức & kiểm tra",
    image: "",
    description: "",
  },
  {
    name: "Trần minh tuấn",
    position: "Trưởng ban kế hoạch tài chính",
    image: "",
    description: "",
  },
  {
    name: "Phạm bảo anh",
    position: "Trưởng ban truyền thông",
    image: "",
    description: "",
  },
  {
    name: "Nguyễn văn an",
    position: "Chánh văn phòng",
    image: "",
    description: "",
  },
  {
    name: "Trần quốc tuân",
    position: "Phó giám đốc",
    image: "",
    description: "",
  },
]

const GroupOverview = () => {
  return (
    <div>
      <Banner title="Tổng quan hội" breadcrumb={breadcrumbItems} />

      {/* Group mission */}
      <section className="group-mission bg-[#FAF9F2] py-14">
        <div className="container grid grid-cols-1 gap-10 md:gap-15 place-items-center md:grid-cols-2">
          <Image
            src="/group/group-overview.png"
            alt="mission"
            width={500}
            height={500}
            className="size-full object-contain"
          />
          <div className="space-y-8">
            <div className="space-y-4">
              <CategoryTitle title="Tổng quan" />
              <h2 className="text-4xl font-bold text-primary-dark capitalize">
                Nhiệm vụ của phân hội
              </h2>
            </div>
            <div>
              <Tabs defaultValue={"1"}>
                <TabsList className="mb-5 h-13 bg-transparent gap-x-2 px-0">
                  {groupMissionTabs.map(tab => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="font-semibold h-full px-5 cursor-pointer transition-all rounded-full data-[state=active]:bg-accent-orange/10 data-[state=active]:text-primary-dark data-[state=active]:border-accent-orange"
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {groupMissionTabs.map(tab => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <p>{tab.content}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Group structure */}
      <section className="group-structure container py-10">
        <div className="container space-y-4 text-center">
          <CategoryTitle title="Tổng quan" containerClassName="inline-flex" />
          <h2 className="text-4xl font-bold text-primary-dark capitalize">
            Sơ đồ tổ chức
          </h2>
        </div>
        <Image
          src="/group/so-do-to-chuc.png"
          alt="group structure"
          width={1400}
          height={1400}
          className="mt-10 size-full object-contain"
        />
      </section>

      {/* Ban điều hành */}

      <section className="bg-[#FAF9F2] py-10">
        <div className="container space-y-10">
          <div className="space-y-4">
            <CategoryTitle title="Thành viên" />
            <h2 className="text-4xl font-bold text-primary-dark capitalize">
              Ban điều hành
            </h2>
          </div>

          <div className="flex gap-6">
            <ul className="flex-1 grid grid-cols-3 gap-x-6">
              {managerList.slice(0, 3).map(manager => (
                <li key={manager.name}>
                  <ManagerCard {...manager} />
                </li>
              ))}
            </ul>
            {/*  */}
            <div className="shrink-0 max-w-[360px] w-full">
              <Table className="border">
                <TableHeader className="bg-primary-dark text-white">
                  <TableRow className="text-white">
                    <TableHead className="font-semibold text-white text-center py-3">
                      STT
                    </TableHead>
                    <TableHead className="font-semibold text-white">
                      Họ và tên
                    </TableHead>
                    <TableHead className="font-semibold text-white">
                      Chức danh
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {managerList.map((manager, index) => (
                    <TableRow key={manager.name} className="odd:bg-muted/50">
                      <TableCell className="font-medium text-center py-3">
                        {index + 1}
                      </TableCell>
                      <TableCell className="font-medium capitalize py-3">
                        {manager.name}
                      </TableCell>
                      <TableCell className="py-3">{manager.position}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupOverview

// Manager card
interface ManagerCardProps {
  name: string
  position: string
  image: string
  description: string
}

const ManagerCard = ({
  name,
  position,
  image,
  description,
}: ManagerCardProps) => {
  return (
    <div className="bg-white p-2">
      <div className="flex flex-col gap-y-2">
        <Image
          src={image}
          alt="manager"
          width={250}
          height={250}
          className="w-full aspect-[0.83] object-cover rounded-md"
        />
        <div>
          <div className="text-center bg-gray-50 p-2">
            <span className="text-gray-900 font-semibold capitalize">
              {position}
            </span>
            <h3 className="text-lg text-primary-dark font-bold capitalize">
              {name}
            </h3>
            <p className="text-sm italic text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
