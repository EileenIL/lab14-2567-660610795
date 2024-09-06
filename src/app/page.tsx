"use client";
import { Pagination ,Group,Divider,Button,Textarea,Rating,Container, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container ff="heading" size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm" > Your rating</Title>
      <Rating defaultValue={0}  size="lg" />
      <Textarea 
      mt="xs"
      autosize
      minRows={3}
      maxRows={3}

      label="Your review"
      placeholder="Do you enjoy eating?"
    />
    <Button mt="xs" variant="filled" color="orange">Submit Review</Button>
    
    <Divider my="xs" />
    <Group justify="center">
      <Title order={4}>Elon Musk</Title>
      <Rating value={5} readOnly size="sm" ></Rating>
    </Group>
      <Text ta="center"  c="dimmed">Best pizza in this world. I give you X score.</Text>

      <Divider my="xs" />
    <Group justify="center">
      <Title order={4}>Mark Zuck</Title>
      <Rating value={4} readOnly size="sm" ></Rating>
    </Group>
      <Text ta="center" c="dimmed">My favourite part is pepperoni</Text>

    <Group justify="center"  mt="md">     
      <Pagination total={20} color="orange" />
      </Group>  
      <Text ta="center" my="sm"  c="dimmed">
        Copyright © 2024 Sadanun Laksanaaree 660610795
      </Text>
    </Container>
  );
}
