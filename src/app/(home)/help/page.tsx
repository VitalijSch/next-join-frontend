import ArrowBackButton from "@/shared/components/buttons/ArrowBackButton";

export default function HelpPage() {
  return (
    <div className="py-[110px] px-[96px] overflow-auto">
      <ArrowBackButton className="sticky top-[70px] left-[1000px] w-fit" />
      <h1 className="text-[61px] font-[700]">Help</h1>
      <br />
      <span>
        Welcome to the help page for{" "}
        <span className="text-[#29ABE2]">Join</span>, your guide to using our
        kanban project management tool. Here, we&apos;ll provide an overview of
        what <span className="text-[#29ABE2]">Join</span> is, how it can benefit
        you, and how to use it.
      </span>
      <br />
      <br />
      <h2 className="text-[27px] font-[700]">What is Join?</h2>
      <br />
      <span>
        <span className="text-[#29ABE2]">Join</span> is a kanban-based project
        management tool designed and built by a group of dedicated students as
        part of their web development bootcamp at the Developer Akademie.
      </span>
      <br />
      <br />
      <span>
        Kanban, a Japanese term meaning &quot;billboard&quot;, is a highly
        effective method to visualize work, limit work-in-progress, and maximize
        efficiency (or flow). <span className="text-[#29ABE2]">Join</span>{" "}
        leverages the principles of kanban to help users manage their tasks and
        projects in an intuitive, visual interface.
      </span>
      <br />
      <br />
      <span>
        It is important to note that{" "}
        <span className="text-[#29ABE2]">Join</span> is designed as an
        educational exercise and is not intended for extensive business usage.
        While we strive to ensure the best possible user experience, we cannot
        guarantee consistent availability, reliability, accuracy, or other
        aspects of quality regarding{" "}
        <span className="text-[#29ABE2]">Join</span>.
      </span>
      <br />
      <br />
      <h2 className="text-[27px] font-[700]">How to use it</h2>
      <br />
      <p>
        Here is a step-by-step guide on how to use{" "}
        <span className="text-[#29ABE2]">Join</span>:
      </p>
      <br />
      <div>
        <h2 className="text-[27px] font-[700]">1.</h2>
        <div>
          <h2 className="text-[27px] font-[700]">Exploring the Board</h2>
          <span>
            When you log in to <span className="text-[#29ABE2]">Join</span>,
            you&apos;ll find a default board. This board represents your project
            and contains four default lists: &quot;To Do&quot;, &quot;In
            Progress&quot;, &quot;Await feedback&quot;, and &quot;Done&quot;.
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[27px] font-[700]">2.</h2>
        <div>
          <h2 className="text-[27px] font-[700]">Creating Contacts</h2>
          <span>
            In <span className="text-[#29ABE2]">Join</span>, you can add
            contacts to collaborate on your projects. Go to the
            &quot;Contacts&quot; section, click on &quot;New contact&quot;, and
            fill in the required information. Once added, these contacts can be
            assigned tasks and they can interact with the tasks on the board.
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[27px] font-[700]">3.</h2>
        <div>
          <h2 className="text-[27px] font-[700]">Adding Cards</h2>
          <span>
            Now that you&apos;ve added your contacts, you can start adding
            cards. Cards represent individual tasks. Click the &quot;+&quot;
            button under the appropriate list to create a new card. Fill in the
            task details in the card, like task name, description, due date,
            assignees, etc.
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[27px] font-[700]">4.</h2>
        <div>
          <h2 className="text-[27px] font-[700]">Moving Cards</h2>
          <span>
            {" "}
            As the task moves from one stage to another, you can reflect that on
            the board by dragging and dropping the card from one list to
            another.
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-[27px] font-[700]">5.</h2>
        <div>
          <h2 className="text-[27px] font-[700]">Deleting Cards</h2>
          <span>
            Once a task is completed, you can either move it to the
            &quot;Done&quot; list or delete it. Deleting a card will permanently
            remove it from the board. Please exercise caution when deleting
            cards, as this action is irreversible.
          </span>
        </div>
      </div>
      <p>
        Remember that using <span className="text-[#29ABE2]">Join</span>{" "}
        effectively requires consistent updates from you and your team to ensure
        the board reflects the current state of your project.
      </p>
      <br />
      <br />
      <p>
        Have more questions about <span className="text-[#29ABE2]">Join</span>?
        Feel free to contact us at [Your Contact Email]. We&apos;re here to help
        you!
      </p>
      <br />
      <br />
      <h2 className="text-[27px] font-[700]">Enjoy using Join!</h2>
    </div>
  );
}
