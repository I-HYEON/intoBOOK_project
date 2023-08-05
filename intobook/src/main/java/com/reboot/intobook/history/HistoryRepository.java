package com.reboot.intobook.history;

import com.reboot.intobook.history.dto.GetHistoryResponse;
import com.reboot.intobook.history.entity.History;
import com.reboot.intobook.user.entity.User;
import com.reboot.intobook.userbook.dto.UserBookListResponseDto;
import com.reboot.intobook.userbook.entity.UserBook;
import com.reboot.intobook.userbook.entity.UserBookStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<History, Long> {
//    History findByUser(User user);
    Page<History> findByUserBook(UserBook userBook, Pageable pageable);
//    h.startTime, h.endTime, h.comment, h.pageAmount

    List<GetHistoryResponse> findByUser(User user);

}
