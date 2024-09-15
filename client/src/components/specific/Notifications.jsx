import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../constants/sampleData";

const Notifications = () => {
  const handlerRequestHandler = ({ _id, accept }) => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) => (
            <NotificationsItem
              sender={i.sender}
              _id={i._id}
              handler={handlerRequestHandler}
              key={i._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};
const NotificationsItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis", // This is key to add the ellipsis
            display: "block",
          }}
        >
          {`${name} send you a friend request`}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
export default Notifications;
