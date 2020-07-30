import { Bookmark } from '@phantom/bookmark-api';

export class AddBookmark {
  static readonly type = '[Bookmark] Add';

  constructor(public url: string) {}
}

export class GetBookmarks {
  static readonly type = '[Bookmark] Get';
}

export class UpdateBookmark {
  static readonly type = '[Bookmark] Update';

  constructor(public url: string, public id: number) {}
}

export class DeleteBookmark {
  static readonly type = '[Bookmark] Delete';

  constructor(public id: number) {}
}

export class SetSelectedBookmark {
  static readonly type = '[Bookmark] Set';

  constructor(public payload: Bookmark) {}
}
