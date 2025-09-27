import CustomInput from "@/components/CustomInput";
import { PageWrapper } from "@/components/PageWrapper";
import { IoSearch } from "react-icons/io5";

export default function Products() {
  return (
    <div className="">
      <PageWrapper.Root>
        <PageWrapper.Header />
        <PageWrapper.Content
          title="Todos os products"
          subtitle="8 produts encontrados"
        >
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <CustomInput
              type="text"
              placeholder="Buscar produtos"
              icon={<IoSearch />}
              ></CustomInput>
            </div>
          </div>
        </PageWrapper.Content>
      </PageWrapper.Root>
    </div>
  );
}
