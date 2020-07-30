import { Bookmark } from '@phantom/bookmark-api';

export class AddBookmark {
  static readonly type = '[Bookmark] Add';

  constructor(public payload: Bookmark) {}
}

export class GetBookmarks {
  static readonly type = '[Bookmark] Get';
}

export class UpdateBookmark {
  static readonly type = '[Bookmark] Update';

  constructor(public payload: Bookmark, public id: number) {}
}

export class DeleteBookmark {
  static readonly type = '[Bookmark] Delete';

  constructor(public id: number) {}
}

export class SetSelectedBookmark {
  static readonly type = '[Bookmark] Set';

  constructor(public payload: Bookmark) {}
}
