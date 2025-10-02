import { useMutation } from "@tanstack/react-query";
import { deletePost, getTodos, patchTodo, postTodos } from "./api";

export const useGetMutation = () => {
  return useMutation({ mutationFn: getTodos });
};

export const useCreateMutation = () => {
  return useMutation({ mutationFn: postTodos });
};

export const useChangeMutation = () => {
  return useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: string }) =>
      patchTodo(id, todo),
  });
};

export const useDeleteMutation = () => {
  return useMutation({ mutationFn: deletePost });
};
