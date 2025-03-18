import {
  Avatar,
  HStack,
  HoverCard,
  Icon,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuChartLine } from "react-icons/lu"

const Demo = () => {
  return (
    <HoverCard.Root size="sm">
      <HoverCard.Trigger asChild>
        <Link href="https://github.com/ravvnen">@ravvnen</Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow />
            <Stack gap="4" direction="row">
              <Avatar.Root>
                <Avatar.Image src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" />
                <Avatar.Fallback name="Chakra UI" />
              </Avatar.Root>
              <Stack gap="3">
                <Stack gap="1">
                  <Text textStyle="sm" fontWeight="semibold">
                    Phillip Ravn
                  </Text>
                  <Text textStyle="sm" color="fg.muted">
                    Passionate nerd based in Copenhagen, Denmark.
                  </Text>
                </Stack>
                <HStack color="fg.subtle">
                  <Icon size="sm">
                    <LuChartLine />
                  </Icon>
                  <Text textStyle="xs">3 Visits</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}

export default Demo