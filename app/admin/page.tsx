import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Page() {
  return (
    <>
      <div>Admin Page</div>
      <p>Select by Event or by Team</p>
      <div>
        Event
        <div>Statics
        <div>Static1</div>
        <div>Static2</div>
        <div>Static3</div>
        <div>Static4</div>
        </div>
        <div>Dynamics
        <div>Dynamic1</div>
        <div>Dynamic2</div>
        <div>Dynamic3</div>
        <div>Dynamic4</div>
        </div>
      </div>
      <div>Team</div>
    </>
  );
}
