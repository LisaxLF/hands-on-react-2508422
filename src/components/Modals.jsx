export default ({ member, handleClose, handleChange }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name}
            />
            <hgroup>
              <h1>
                {member.name} - {member.id}
              </h1>
              <p>{member.bio}</p>
            </hgroup>
          </div>
        </hgroup>
        <hgroup
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a
            className="outline"
            href="#"
            role="button"
            onClick={() => {
              handleChange(Number(member.id - 1));
            }}
          >
            prev
          </a>
          <a
            className="outline"
            href="#"
            role="button"
            onClick={() => {
              handleChange(Number(member.id + 1));
            }}
          >
            next
          </a>
        </hgroup>
      </article>
    </dialog>
  );
};
