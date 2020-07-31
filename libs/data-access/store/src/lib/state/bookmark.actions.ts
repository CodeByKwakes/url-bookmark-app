import { Bookmark } from '@phantom/bookmark-api';

/**
 * @description add a bookmark action type
 * @author Kwakes Prempeh
 * @export
 * @class AddBookmark
 */
export class AddBookmark {
  static readonly type = '[Bookmark] Add';

  constructor(public url: string) {}
}
/**
 * @description get a bookmark action type
 * @author Kwakes Prempeh
 * @export
 * @class GetBookmarks
 */
export class GetBookmarks {
  static readonly type = '[Bookmark] Get';
}

/**
 * @description update a bookmark action type
 * @author Kwakes Prempeh
 * @export
 * @class UpdateBookmark
 */
export class UpdateBookmark {
  static readonly type = '[Bookmark] Update';

  constructor(public url: string, public id: string) {}
}

/**
 * @description delete a bookmark action type
 * @author Kwakes Prempeh
 * @export
 * @class DeleteBookmark
 */
export class DeleteBookmark {
  static readonly type = '[Bookmark] Delete';

  constructor(public id: string) {}
}

/**
 * @description Select a bookmark action type
 * @author Kwakes Prempeh
 * @export
 * @class SetSelectedBookmark
 */
export class SetSelectedBookmark {
  static readonly type = '[Bookmark] Set';

  constructor(public payload: Bookmark) {}
}
