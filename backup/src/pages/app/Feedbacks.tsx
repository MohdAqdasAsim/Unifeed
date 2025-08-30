import { FeedbackDetails, FeedbackList, Sidebar } from "../../components";

const Feedbacks = () => {
  return (
    <section className="w-screen min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-100">
      <Sidebar />
      <FeedbackList />
      <FeedbackDetails />
    </section>
  );
};

export default Feedbacks;
