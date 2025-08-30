import { useEffect, useState } from "react";
import AppWrapper from "../../hoc/AppWrapper";
import { Details, List, NotConnectedView } from "../../components";
import { mockFeedbacks } from "../../services/feedback";

type FeedbackHubProps = {
  isConnected: boolean;
};

const FeedbackHub = ({ isConnected }: FeedbackHubProps) => {
  const [isConnectedFetched, setIsConnectedFetched] = useState(isConnected);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isConnected");
    if (stored === "true") {
      setIsConnectedFetched(true);
    }
  }, []);

  const handleConnect = (provider: string) => {
    console.log(`Connecting with ${provider}...`);
    setIsConnectedFetched(true);
    localStorage.setItem("isConnected", "true");
    setIsModalOpen(false);
  };

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedFeedback =
    mockFeedbacks.find((fb) => fb.id === selectedId) || null;

  const handleCloseDetails = () => {
    setSelectedId(null);
  };

  return (
    <section className="w-full h-full flex flex-row justify-center items-center">
      {!isConnectedFetched ? (
        <NotConnectedView
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          handleConnect={handleConnect}
        />
      ) : (
        <>
          <div className="w-1/3 h-full">
            <List
              feedbacks={mockFeedbacks}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
          <div className="w-2/3 h-full flex-1">
            <Details feedback={selectedFeedback} onClose={handleCloseDetails} />
          </div>
        </>
      )}
    </section>
  );
};

const WrappedApp = AppWrapper(FeedbackHub, "Feedback Hub");
export default WrappedApp;
