import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices } from "@/app/lib/data";

export async function OverallTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position/Place
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  # / CarNumber
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  University? BR
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalties / Penalty
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Presentation Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Design Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Acceleration Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Skid Pad Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Autocross Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Endurance Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Efficiency Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Score
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function OverallVehicleTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Engine
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Wheel
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Wings?
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  % Right Weight with Driver
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  % Front Axel Weight with Driver
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Betwen Axels
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Front Bitola
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rear Bitola
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Chassi Weight Declared
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Weight without driver measured
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function OverallPenaltiesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ses 1
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ses 2
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ses 3
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ses 4
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ses 5
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  During Competition
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function CostTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Report
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Real Case
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Easy to Manufacture
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost 0-40
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalty of Event
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalty of Report
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Observations
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function DesignTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Suspension
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Frame
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Engine
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Transmission
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Brakes
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Electronics
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Management
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalties of Event
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalties of Report
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Score Design
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Observations
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function PresentationTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalty of Event
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalty of Report
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Score Presentation
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Observations
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function AccelerationTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Best Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Acceleration Score
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function SkidPadTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time A
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time B
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time A
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time B
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time A
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time B
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time A
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time B
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Best Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Skid Pad Score
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function AutocrossTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Off-Courses
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Off-Courses
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver1_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Off-Courses
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run1 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Off-Courses
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Driver2_Run2 Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Best Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Autocross Score
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    800
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    400
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12033191
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function EnduroTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Brute Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Laps
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cons
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Off-Courses
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Penalties
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Time Adjusted
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Enduro Score
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Observations
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function EfficiencyTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Position
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Average Lap Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Laps
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Come from Drivers
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fuel Types
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Consumed Fuel
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Efficiency Score
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    Maua Racing
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    IMT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    0
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    300
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    250
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    180
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    200
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function EnduroLapTimeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  #
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  1
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  2
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  3
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  4
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  5
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  6
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  7
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  8
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  9
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  10
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  11
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  12
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  13
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  14
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  15
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  16
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  17
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  18
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  19
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  20
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  21
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  22
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    #
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    2
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    3
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    4
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    5
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    6
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    7
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    8
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    9
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    10
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    11
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    12
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    13
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    14
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    15
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    16
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    17
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    18
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    19
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    20
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    21
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    22
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function TeamTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Team
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                University
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  3
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  4
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  5
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  6
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  7
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    1
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    2
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    3
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    4
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    5
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    6
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    7
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td> */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
